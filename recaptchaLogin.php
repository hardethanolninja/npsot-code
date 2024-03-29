<?php

/*
 * Add reCaptcha Script   
 * https://wiryawanadipa.com/blog/add-recaptcha-on-wordpress-admin-login-page-without-plugin/
*/
// Add reCaptcha JavaScript on login page
function login_style() {
    wp_register_script('login-recaptcha', 'https://www.google.com/recaptcha/api.js', false, NULL);
    wp_enqueue_script('login-recaptcha');
}
add_action('login_enqueue_scripts', 'login_style');

// Add reCaptcha on login page
function add_recaptcha_on_login_page() {
    echo '<div class="g-recaptcha brochure__form__captcha" data-sitekey="6LfR19cmAAAAACNlqyjQKm9sMAEn6DynqEnmjRec"></div>';
}
add_action('login_form','add_recaptcha_on_login_page');

// Validating reCaptcha on login page
function captcha_login_check($user, $password) {
    if (!empty($_POST['g-recaptcha-response'])) {
        $secret = '6LfR19cmAAAAAPzeIHMg4zq_tHxgAygdb0DSu6GB';
        $ip = $_SERVER['REMOTE_ADDR'];
        $captcha = $_POST['g-recaptcha-response'];
        $rsp = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $secret . '&response=' . $captcha .'&remoteip='. $ip);
        $valid = json_decode($rsp, true);
        if ($valid["success"] == true) {
            return $user;
        } else {
            return new WP_Error('Captcha Invalid', __('<center>Captcha Invalid! Please check the captcha!</center>'));
        }
    } else {
        return new WP_Error('Captcha Invalid', __('<center>Captcha Invalid! Please check the captcha!</center>'));
    }
}
add_action('wp_authenticate_user', 'captcha_login_check', 10, 2);
