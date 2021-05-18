<?php
require_once(__DIR__ . '/vendor/autoload.php');

$config = Interserver\Mailbaby\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'ozKWmXlPH3XOyWR836NuBVIZLzDjkMJ6daiE8JAgEFEdyUYmAJJvt8B65r5OZXOm9ouFlHIP8SUpnSXcpPwDLQ97laG1w1XHsadvrC1QbR3grbdm3UV3fns8uleDFoye');

$apiInstance = new Interserver\Mailbaby\Api\DefaultApi(
    new GuzzleHttp\Client(),
    $config
);
$to = 'detain@interserver.net'; // string | The Contact whom is the primary recipient of this email.
$from = 'detain@gmail.com'; // string | The contact whom is the this email is from.
$subject = 'subject example'; // string | The subject or title of the email
$body = 'body example'; // string | The main email contents.

try {
    $result = $apiInstance->sendMail($to, $from, $subject, $body);
    var_export($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->sendMail: ', $e->getMessage(), PHP_EOL;
}
