<?php

$url = $_POST['jqueryScrapeUrl'];
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, true );
$curl_scraped_page = curl_exec($ch);
curl_close($ch);

$curl_scraped_page;
$content = str_replace('"', "'", $curl_scraped_page);
$content = str_replace("<script", '', $content);
$content = str_replace("</script>", '', $content);
$content = str_replace("<img ", '<span ', $content);
$content = str_replace(array("\r", "\r\n", "\n"), '', $content);
$content = trim($content);
echo '<div id="jqueryScrape">'.$content.'</div>';