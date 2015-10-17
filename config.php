<?php
	// CONFIGURATION FILE FOR APP

	// replace root/root with the actual username/password for MySQL
	if ($_SERVER["REMOTE_ADDR"] == "127.0.0.1"){
		$DB_SERVER = '';
		$DB_USER   = '';
		$DB_PASS   = '';
		$DB_NAME   = '';
	}else{
		$DB_SERVER = '';
		$DB_USER   = '';
		$DB_PASS   = '';
		$DB_NAME   = '';
	}

	// enable error reporting
	error_reporting(1);
?>
