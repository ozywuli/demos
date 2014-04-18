<?php

$dbc = mysqli_connect( 'localhost', 'root', '', 'dao' ) OR die ( mysqli_connect_error() ) ;
mysqli_set_charset( $dbc, 'utf-8');

if ( !$dbc ) {
	die( 'Could not connect: ' . mysqli_error( $dbc ) );
} else {

mysqli_select_db( $dbc, 'dao' );
$sql = "SELECT * FROM daodejing ORDER BY RAND() LIMIT 0,1";

$result = mysqli_query( $dbc, $sql );
$row = mysqli_fetch_array( $result );

echo json_encode( $row );

// while ( $row = mysqli_fetch_array( $result ) ) {
// 	echo '<h3>' . $row['Chapter'] . '</h3>';
// 	echo '<p>' . $row['Text'] . '</p>';
// }

mysqli_close($dbc);

}

?>