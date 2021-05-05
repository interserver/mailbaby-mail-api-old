<?php
/**
 * This file is part of webman.
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the MIT-LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @author    walkor<walkor@workerman.net>
 * @copyright walkor<walkor@workerman.net>
 * @link      http://www.workerman.net/
 * @license   http://www.opensource.org/licenses/mit-license.php MIT License
 */

use Webman\Route;

Route::get('/ping', function($request) {
	return response('Server is up and running', 200);	
});
Route::group('/mail', function() {
	Route::get('', [app\controller\Mail::class, 'index']);
	Route::post('/send', [app\controller\Mail::class, 'send']);
	Route::post('/log', [app\controller\Mail::class, 'log']);
	
})->middleware([
	app\middleware\AuthCheck::class
]);
Route::disableDefaultRoute();