<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
<title>404 - �������� �� �������</title>
<meta name="Keywords" content=""/>
<meta name="Description" content=""/>

<link rel="shortcut icon" href="/images/favicon.ico" />
<link href="/css/style.css?ver=2.0"  rel="stylesheet" type="text/css" />
<link href="/css/prettyPhoto.css"  rel="stylesheet" type="text/css" />
<script type="text/javascript" src="/js/jquery.js"></script>
<script type="text/javascript" src="/js/jqueryCode.js"></script>
<script type="text/javascript" src="/js/jquery.prettyPhoto.js"></script>
<script type="text/javascript">
$(document).ready(function(){
  $(".prettyPhoto").prettyPhoto();

});
</script>

<!--
<script src="http://api-maps.yandex.ru/1.1/?key=AFhxAksBAAAAVMhfCwIA_hiSGXRXLt8ft5rA1DnYKSRRDhEAAAAAAAAAAAAgXBNmKP1omzVsT3XByq2iPCNVUA==&wizard=constructor" type="text/javascript"></script>
-->

<script type="text/javascript">
    YMaps.jQuery(function () {
        var map = new YMaps.Map(YMaps.jQuery("#YMapsID-1727")[0]);
        map.setCenter(new YMaps.GeoPoint(37.583463,55.753635), 15, YMaps.MapType.MAP);
        map.addControl(new YMaps.Zoom());
        map.addControl(new YMaps.ToolBar());
        map.addControl(new YMaps.TypeControl());

        YMaps.Styles.add("constructor#pmlbmPlacemark", {
            iconStyle : {
                href : "http://api-maps.yandex.ru/i/0.3/placemarks/pmlbm.png",
                size : new YMaps.Point(28,29),
                offset: new YMaps.Point(-8,-27)
            }
        });

       map.addOverlay(createObject("Placemark", new YMaps.GeoPoint(37.585057,55.751797), "constructor#pmlbmPlacemark", "Silva Design"));
        
        function createObject (type, point, style, description) {
            var allowObjects = ["Placemark", "Polyline", "Polygon"],
                index = YMaps.jQuery.inArray( type, allowObjects),
                constructor = allowObjects[(index == -1) ? 0 : index];
                description = description || "";
            
            var object = new YMaps[constructor](point, {style: style, hasBalloon : !!description});
            object.description = description;
            
            return object;
        }
    });
</script>
</head>
<body>
	<div id="container">				
		<div id="top">
			<a href="/"><img src="/img/logo.gif" alt="SILVIA DESIGN" /></a>

		</div>
		<div id="navi">
			<ul><li><a href="/services/">������</a></li><li><a href="/about/">� ��������</a></li><li><a href="/portfolio/">������� �����</a></li><li><a href="/contacts/">���������� ����������</a></li></ul>
		</div>
		<div class="navline"></div>
		<div id="topBanner"></div>
		<div class="topEndLine"></div>
		<div class="LineStat">
			<a href="/">����������� ������</a> / <a href="/sitemap/">����� �����</a> / <span style="color:#336600">404 - �������� �� �������</span>	
		</div>

		<div class="pageCont">
			<h1>������ 404</h1>
<p>� ���������, ����� �������� �� ����� �� ����������.</p>
<p>�������������� ���� � ������� ����� �����, ��� ��������� �� <a href="/">������� ��������</a>.</p>
		</div>		
				
		<div id="footer">		
			<div class="line"></div>
			
			<div class="copir">
				<div class="date">� 2007�2015 Oridis Design</div>
				<!--�������: 8 495 782-74-37, ��. �����: <a href="mailto:info@silvadesign.ru">info@silvadesign.ru</a><br />

				�����: �. ������, ����������, ��. ������, ��� 8-->
			</div><div class="partners">���� ��������: <!-- trade-links --></div>

		</div>

	</div>

<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-12334779-1");
pageTracker._trackPageview();
} catch(err) {}</script>
<!-- YaMetrics begin -->
<script type="text/javascript"><!--
var ya_cid=876846;
//--></script>
<script src="http://bs.yandex.ru/resource/watch.js" type="text/javascript"></script>
<noscript><div style="display: inline;"><img src="http://bs.yandex.ru/watch/876846" width="1" height="1" alt=""></div></noscript>
<!-- YaMetrics end -->
</body>
</html>