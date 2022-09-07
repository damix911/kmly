import express from "express";

const app = express()
const port = process.env["PORT"];

app.get('/', (_req, res) => {
  res.send('Hello World!')
});

app.get('/kml/earthquakes.kml', (_req, res) => {
  res.contentType("application/kml").send(`<?xml version="1.0" encoding="UTF-8"?>
  <kml xmlns="http://www.opengis.net/kml/2.2" xmlns:atom="http://www.w3.org/2005/Atom" xml:lang="en-US">
  <NetworkLinkControl>
    <minRefreshPeriod>60</minRefreshPeriod>
  </NetworkLinkControl>
  <Document id="https://earthquake.usgs.gov/fdsnws/event/1/query?format=kml&amp;minmagnitude=5.8">
    <name>USGS Earthquakes</name>
    <description>Updated 2022-09-07 19:40:38 UTC</description>
    <atom:author><atom:name>U.S. Geological Survey</atom:name></atom:author>
    <atom:link href="https://earthquake.usgs.gov/fdsnws/event/1/query?format=kml&amp;minmagnitude=5.8" rel="self"/>
  <Style id="circle-inactive"><IconStyle><Icon><href>https://earthquake.usgs.gov/earthquakes/feed/v1.0/images/kml_circle.png</href></Icon></IconStyle><LabelStyle><scale>0</scale></LabelStyle><BalloonStyle><text><![CDATA[<style>h2{margin-bottom:0;font-size:16px;font-weight:bold;}.quicksummary{float:left;}.quicksummary>a{float:left;display:block;padding:4px;margin-right:8px;text-decoration:none;border:1pxsolid#333;}.quicksummary>a.tsunamilogo{padding:0;}.roman{font-family:Georgia,Times,serif;}.pager-pending{background-color:#FFF;color:#000;}.pager-green{background-color:#00b04f;color:#fff;}.pager-yellow{background-color:#ff0;color:#000;}.pager-orange{background-color:#f90;color:#000;}.pager-red{background-color:#f00;color:#fff;}.mmi-I{color:#000;background-color:#FFFFFF;}.mmi-II{color:#000;background-color:#ACD8E9;}.mmi-III{color:#000;background-color:#ACD8E9;}.mmi-IV{color:#000;background-color:#83D0DA;}.mmi-V{color:#000;background-color:#7BC87F;}.mmi-VI{color:#000;background-color:#F9F518;}.mmi-VII{color:#000;background-color:#FAC611;}.mmi-VIII{color:#000;background-color:#FA8A11;}.mmi-IX{color:#FFF;background-color:#F7100C;}.mmi-X{color:#FFF;background-color:#C80F0A;}.mmi-XI{color:#FFF;background-color:#C80F0A;}.mmi-XII{color:#FFF;background-color:#C80F0A;}dl{clear:left;font-family:Helvetica;line-height:1.3;}dt{color:#999;margin-top:.5em;}dd{margin:0;}.links{clear:both;line-height:1.3;}</style><img src="https://earthquake.usgs.gov/earthquakes/feed/v1.0/images/kml_banner.jpg" alt="USGS" width="400" height="40"/>$[description]<img src="https://earthquake.usgs.gov/earthquakes/feed/v1.0/images/anss.gif" alt="ANSS" width="100" height="31"/>]]></text></BalloonStyle></Style><Style id="circle-active"><IconStyle><Icon><href>https://earthquake.usgs.gov/earthquakes/feed/v1.0/images/kml_circle.png</href></Icon></IconStyle><LabelStyle><scale>1</scale></LabelStyle><BalloonStyle><text><![CDATA[<style>h2{margin-bottom:0;font-size:16px;font-weight:bold;}.quicksummary{float:left;}.quicksummary>a{float:left;display:block;padding:4px;margin-right:8px;text-decoration:none;border:1pxsolid#333;}.quicksummary>a.tsunamilogo{padding:0;}.roman{font-family:Georgia,Times,serif;}.pager-pending{background-color:#FFF;color:#000;}.pager-green{background-color:#00b04f;color:#fff;}.pager-yellow{background-color:#ff0;color:#000;}.pager-orange{background-color:#f90;color:#000;}.pager-red{background-color:#f00;color:#fff;}.mmi-I{color:#000;background-color:#FFFFFF;}.mmi-II{color:#000;background-color:#ACD8E9;}.mmi-III{color:#000;background-color:#ACD8E9;}.mmi-IV{color:#000;background-color:#83D0DA;}.mmi-V{color:#000;background-color:#7BC87F;}.mmi-VI{color:#000;background-color:#F9F518;}.mmi-VII{color:#000;background-color:#FAC611;}.mmi-VIII{color:#000;background-color:#FA8A11;}.mmi-IX{color:#FFF;background-color:#F7100C;}.mmi-X{color:#FFF;background-color:#C80F0A;}.mmi-XI{color:#FFF;background-color:#C80F0A;}.mmi-XII{color:#FFF;background-color:#C80F0A;}dl{clear:left;font-family:Helvetica;line-height:1.3;}dt{color:#999;margin-top:.5em;}dd{margin:0;}.links{clear:both;line-height:1.3;}</style><img src="https://earthquake.usgs.gov/earthquakes/feed/v1.0/images/kml_banner.jpg" alt="USGS" width="400" height="40"/>$[description]<img src="https://earthquake.usgs.gov/earthquakes/feed/v1.0/images/anss.gif" alt="ANSS" width="100" height="31"/>]]></text></BalloonStyle></Style><StyleMap id="circle"><Pair><key>normal</key><styleUrl>#circle-inactive</styleUrl></Pair><Pair><key>highlight</key><styleUrl>#circle-active</styleUrl></Pair></StyleMap>
  <LookAt><longitude>-100</longitude><latitude>39</latitude><range>4000000</range><tilt>0</tilt><heading>0</heading></LookAt>
  <Folder><name>2022-09-07</name><open>0</open>
  <Placemark id="us7000i5xu"><name>M 5.9 - southern East Pacific Rise</name><description><![CDATA[<h2>M 5.9 - southern East Pacific Rise</h2><p class="quicksummary"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i5xu#pager" title="PAGER estimated impact alert level" class="pager-green">PAGER - <strong class="roman">GREEN</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i5xu#shakemap" title="ShakeMap maximum estimated intensity" class="mmi-I">ShakeMap - <strong class="roman">I</strong></a></p><dl><dt>Time</dt><dd>2022-09-07 06:07:51 UTC</dd><dd>2022-09-07 06:07:51 UTC at epicenter</dd><dt>Location</dt><dd>54.418&deg;S 119.414&deg;W</dd><dt>Depth</dt><dd>22.17 km (13.77 mi)</dd></dl><p class="links"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i5xu">Details from USGS web site</a><br/><a href="https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us7000i5xu&amp;format=kml">Google Earth KML layers for this event</a></p>]]></description><Snippet maxLines="0"></Snippet><LookAt><longitude>-119.4144</longitude><latitude>-54.4184</latitude><range>1000000</range></LookAt><styleUrl>#circle</styleUrl><Style><IconStyle><color>dd009dfe</color><scale>0.6</scale></IconStyle></Style><Point><coordinates>-119.4144,-54.4184,0</coordinates></Point></Placemark>
  </Folder><Folder><name>2022-09-06</name><open>0</open>
  <Placemark id="us7000i5kw"><name>M 5.9 - South Sandwich Islands region</name><description><![CDATA[<h2>M 5.9 - South Sandwich Islands region</h2><p class="quicksummary"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i5kw#pager" title="PAGER estimated impact alert level" class="pager-green">PAGER - <strong class="roman">GREEN</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i5kw#shakemap" title="ShakeMap maximum estimated intensity" class="mmi-IV">ShakeMap - <strong class="roman">IV</strong></a></p><dl><dt>Time</dt><dd>2022-09-06 08:32:41 UTC</dd><dd>2022-09-06 08:32:41 UTC at epicenter</dd><dt>Location</dt><dd>56.597&deg;S 25.775&deg;W</dd><dt>Depth</dt><dd>17.36 km (10.78 mi)</dd></dl><p class="links"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i5kw">Details from USGS web site</a><br/><a href="https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us7000i5kw&amp;format=kml">Google Earth KML layers for this event</a></p>]]></description><Snippet maxLines="0"></Snippet><LookAt><longitude>-25.7752</longitude><latitude>-56.5972</latitude><range>1000000</range></LookAt><styleUrl>#circle</styleUrl><Style><IconStyle><color>dd03fffb</color><scale>0.6</scale></IconStyle></Style><Point><coordinates>-25.7752,-56.5972,0</coordinates></Point></Placemark>
  </Folder><Folder><name>2022-09-05</name><open>0</open>
  <Placemark id="us7000i59t"><name>M 6.6 - 43 km SE of Kangding, China</name><description><![CDATA[<h2>M 6.6 - 43 km SE of Kangding, China</h2><p class="quicksummary"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i59t#pager" title="PAGER estimated impact alert level" class="pager-orange">PAGER - <strong class="roman">ORANGE</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i59t#shakemap" title="ShakeMap maximum estimated intensity" class="mmi-VIII">ShakeMap - <strong class="roman">VIII</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i59t#dyfi" class="mmi-IX" title="Did You Feel It? maximum reported intensity (43 reports)">DYFI? - <strong class="roman">IX</strong></a></p><dl><dt>Time</dt><dd>2022-09-05 04:52:19 UTC</dd><dd>2022-09-05 04:52:19 UTC at epicenter</dd><dt>Location</dt><dd>29.726&deg;N 102.279&deg;E</dd><dt>Depth</dt><dd>10.00 km (6.21 mi)</dd></dl><p class="links"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i59t">Details from USGS web site</a><br/><a href="https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us7000i59t&amp;format=kml">Google Earth KML layers for this event</a></p>]]></description><Snippet maxLines="0"></Snippet><LookAt><longitude>102.279</longitude><latitude>29.7263</latitude><range>1000000</range></LookAt><styleUrl>#circle</styleUrl><Style><IconStyle><color>dd03fffb</color><scale>0.8</scale></IconStyle></Style><Point><coordinates>102.279,29.7263,0</coordinates></Point></Placemark>
  </Folder><Folder><name>2022-09-04</name><open>0</open>
  <Placemark id="us7000i585"><name>M 6.2 - southern East Pacific Rise</name><description><![CDATA[<h2>M 6.2 - southern East Pacific Rise</h2><p class="quicksummary"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i585#pager" title="PAGER estimated impact alert level" class="pager-green">PAGER - <strong class="roman">GREEN</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i585#shakemap" title="ShakeMap maximum estimated intensity" class="mmi-I">ShakeMap - <strong class="roman">I</strong></a></p><dl><dt>Time</dt><dd>2022-09-04 23:57:31 UTC</dd><dd>2022-09-04 23:57:31 UTC at epicenter</dd><dt>Location</dt><dd>56.057&deg;S 124.478&deg;W</dd><dt>Depth</dt><dd>10.00 km (6.21 mi)</dd></dl><p class="links"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i585">Details from USGS web site</a><br/><a href="https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us7000i585&amp;format=kml">Google Earth KML layers for this event</a></p>]]></description><Snippet maxLines="0"></Snippet><LookAt><longitude>-124.4776</longitude><latitude>-56.0574</latitude><range>1000000</range></LookAt><styleUrl>#circle</styleUrl><Style><IconStyle><color>dd03fffb</color><scale>0.8</scale></IconStyle></Style><Point><coordinates>-124.4776,-56.0574,0</coordinates></Point></Placemark>
  <Placemark id="us7000i53f"><name>M 6.9 - central Mid-Atlantic Ridge</name><description><![CDATA[<h2>M 6.9 - central Mid-Atlantic Ridge</h2><p class="quicksummary"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i53f#pager" title="PAGER estimated impact alert level" class="pager-green">PAGER - <strong class="roman">GREEN</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i53f#shakemap" title="ShakeMap maximum estimated intensity" class="mmi-I">ShakeMap - <strong class="roman">I</strong></a> <a class="tsunamilogo" href="http://www.tsunami.gov/" title="Tsunami Warning Center"> <img src="https://earthquake.usgs.gov/earthquakes/feed/v1.0/images/tsunami-wave-warning.jpg" alt="Tsunami Warning Center"/></a></p><dl><dt>Time</dt><dd>2022-09-04 09:42:18 UTC</dd><dd>2022-09-04 09:42:18 UTC at epicenter</dd><dt>Location</dt><dd>0.950&deg;S 21.725&deg;W</dd><dt>Depth</dt><dd>10.00 km (6.21 mi)</dd></dl><p class="links"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i53f">Details from USGS web site</a><br/><a href="https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us7000i53f&amp;format=kml">Google Earth KML layers for this event</a></p>]]></description><Snippet maxLines="0"></Snippet><LookAt><longitude>-21.7246</longitude><latitude>-0.9499</latitude><range>1000000</range></LookAt><styleUrl>#circle</styleUrl><Style><IconStyle><color>dd03fffb</color><scale>0.8</scale></IconStyle></Style><Point><coordinates>-21.7246,-0.9499,0</coordinates></Point></Placemark>
  </Folder><Folder><name>2022-09-02</name><open>0</open>
  <Placemark id="us7000i4st"><name>M 6.1 - 111 km WNW of Kandrian, Papua New Guinea</name><description><![CDATA[<h2>M 6.1 - 111 km WNW of Kandrian, Papua New Guinea</h2><p class="quicksummary"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i4st#pager" title="PAGER estimated impact alert level" class="pager-green">PAGER - <strong class="roman">GREEN</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i4st#shakemap" title="ShakeMap maximum estimated intensity" class="mmi-V">ShakeMap - <strong class="roman">V</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i4st#dyfi" class="mmi-II" title="Did You Feel It? maximum reported intensity (1 reports)">DYFI? - <strong class="roman">II</strong></a></p><dl><dt>Time</dt><dd>2022-09-02 22:39:51 UTC</dd><dd>2022-09-02 22:39:51 UTC at epicenter</dd><dt>Location</dt><dd>5.668&deg;S 148.695&deg;E</dd><dt>Depth</dt><dd>126.00 km (78.29 mi)</dd></dl><p class="links"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i4st">Details from USGS web site</a><br/><a href="https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us7000i4st&amp;format=kml">Google Earth KML layers for this event</a></p>]]></description><Snippet maxLines="0"></Snippet><LookAt><longitude>148.6949</longitude><latitude>-5.6678</latitude><range>1000000</range></LookAt><styleUrl>#circle</styleUrl><Style><IconStyle><color>dd03fffb</color><scale>0.8</scale></IconStyle></Style><Point><coordinates>148.6949,-5.6678,0</coordinates></Point></Placemark>
  </Folder><Folder><name>2022-08-30</name><open>0</open>
  <Placemark id="us7000i3mp"><name>M 6.3 - Pacific-Antarctic Ridge</name><description><![CDATA[<h2>M 6.3 - Pacific-Antarctic Ridge</h2><p class="quicksummary"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i3mp#pager" title="PAGER estimated impact alert level" class="pager-green">PAGER - <strong class="roman">GREEN</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i3mp#shakemap" title="ShakeMap maximum estimated intensity" class="mmi-I">ShakeMap - <strong class="roman">I</strong></a></p><dl><dt>Time</dt><dd>2022-08-30 09:09:43 UTC</dd><dd>2022-08-30 09:09:43 UTC at epicenter</dd><dt>Location</dt><dd>54.639&deg;S 136.171&deg;W</dd><dt>Depth</dt><dd>10.00 km (6.21 mi)</dd></dl><p class="links"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i3mp">Details from USGS web site</a><br/><a href="https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us7000i3mp&amp;format=kml">Google Earth KML layers for this event</a></p>]]></description><Snippet maxLines="0"></Snippet><LookAt><longitude>-136.1712</longitude><latitude>-54.639</latitude><range>1000000</range></LookAt><styleUrl>#circle</styleUrl><Style><IconStyle><color>ddffffff</color><scale>0.8</scale></IconStyle></Style><Point><coordinates>-136.1712,-54.639,0</coordinates></Point></Placemark>
  </Folder><Folder><name>2022-08-29</name><open>0</open>
  <Placemark id="us7000i3gq"><name>M 5.8 - south of the Kermadec Islands</name><description><![CDATA[<h2>M 5.8 - south of the Kermadec Islands</h2><p class="quicksummary"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i3gq#pager" title="PAGER estimated impact alert level" class="pager-green">PAGER - <strong class="roman">GREEN</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i3gq#shakemap" title="ShakeMap maximum estimated intensity" class="mmi-V">ShakeMap - <strong class="roman">V</strong></a></p><dl><dt>Time</dt><dd>2022-08-29 18:10:50 UTC</dd><dd>2022-08-29 18:10:50 UTC at epicenter</dd><dt>Location</dt><dd>32.730&deg;S 179.055&deg;W</dd><dt>Depth</dt><dd>31.80 km (19.76 mi)</dd></dl><p class="links"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i3gq">Details from USGS web site</a><br/><a href="https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us7000i3gq&amp;format=kml">Google Earth KML layers for this event</a></p>]]></description><Snippet maxLines="0"></Snippet><LookAt><longitude>-179.055</longitude><latitude>-32.7298</latitude><range>1000000</range></LookAt><styleUrl>#circle</styleUrl><Style><IconStyle><color>ddffffff</color><scale>0.6</scale></IconStyle></Style><Point><coordinates>-179.055,-32.7298,0</coordinates></Point></Placemark>
  <Placemark id="us7000i38s"><name>M 6.2 - 173 km WSW of Pariaman, Indonesia</name><description><![CDATA[<h2>M 6.2 - 173 km WSW of Pariaman, Indonesia</h2><p class="quicksummary"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i38s#pager" title="PAGER estimated impact alert level" class="pager-green">PAGER - <strong class="roman">GREEN</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i38s#shakemap" title="ShakeMap maximum estimated intensity" class="mmi-VI">ShakeMap - <strong class="roman">VI</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i38s#dyfi" class="mmi-IV" title="Did You Feel It? maximum reported intensity (6 reports)">DYFI? - <strong class="roman">IV</strong></a></p><dl><dt>Time</dt><dd>2022-08-29 03:29:13 UTC</dd><dd>2022-08-29 03:29:13 UTC at epicenter</dd><dt>Location</dt><dd>0.992&deg;S 98.606&deg;E</dd><dt>Depth</dt><dd>17.00 km (10.56 mi)</dd></dl><p class="links"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i38s">Details from USGS web site</a><br/><a href="https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us7000i38s&amp;format=kml">Google Earth KML layers for this event</a></p>]]></description><Snippet maxLines="0"></Snippet><LookAt><longitude>98.6064</longitude><latitude>-0.9922</latitude><range>1000000</range></LookAt><styleUrl>#circle</styleUrl><Style><IconStyle><color>ddffffff</color><scale>0.8</scale></IconStyle></Style><Point><coordinates>98.6064,-0.9922,0</coordinates></Point></Placemark>
  </Folder><Folder><name>2022-08-23</name><open>0</open>
  <Placemark id="us7000i1ui"><name>M 5.8 - </name><description><![CDATA[<h2>M 5.8 - </h2><p class="quicksummary"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i1ui#pager" title="PAGER estimated impact alert level" class="pager-green">PAGER - <strong class="roman">GREEN</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i1ui#shakemap" title="ShakeMap maximum estimated intensity" class="mmi-I">ShakeMap - <strong class="roman">I</strong></a></p><dl><dt>Time</dt><dd>2022-08-23 18:41:30 UTC</dd><dd>2022-08-23 18:41:30 UTC at epicenter</dd><dt>Location</dt><dd>62.191&deg;S 161.369&deg;E</dd><dt>Depth</dt><dd>10.00 km (6.21 mi)</dd></dl><p class="links"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us7000i1ui">Details from USGS web site</a><br/><a href="https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us7000i1ui&amp;format=kml">Google Earth KML layers for this event</a></p>]]></description><Snippet maxLines="0"></Snippet><LookAt><longitude>161.3689</longitude><latitude>-62.1906</latitude><range>1000000</range></LookAt><styleUrl>#circle</styleUrl><Style><IconStyle><color>ddffffff</color><scale>0.6</scale></IconStyle></Style><Point><coordinates>161.3689,-62.1906,0</coordinates></Point></Placemark>
  <Placemark id="us6000id0t"><name>M 6.2 - 117 km S of Pagar Alam, Indonesia</name><description><![CDATA[<h2>M 6.2 - 117 km S of Pagar Alam, Indonesia</h2><p class="quicksummary"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000id0t#pager" title="PAGER estimated impact alert level" class="pager-green">PAGER - <strong class="roman">GREEN</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000id0t#shakemap" title="ShakeMap maximum estimated intensity" class="mmi-V">ShakeMap - <strong class="roman">V</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000id0t#dyfi" class="mmi-VI" title="Did You Feel It? maximum reported intensity (10 reports)">DYFI? - <strong class="roman">VI</strong></a></p><dl><dt>Time</dt><dd>2022-08-23 14:31:39 UTC</dd><dd>2022-08-23 14:31:39 UTC at epicenter</dd><dt>Location</dt><dd>5.074&deg;S 103.083&deg;E</dd><dt>Depth</dt><dd>50.50 km (31.38 mi)</dd></dl><p class="links"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000id0t">Details from USGS web site</a><br/><a href="https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000id0t&amp;format=kml">Google Earth KML layers for this event</a></p>]]></description><Snippet maxLines="0"></Snippet><LookAt><longitude>103.0826</longitude><latitude>-5.0735</latitude><range>1000000</range></LookAt><styleUrl>#circle</styleUrl><Style><IconStyle><color>ddffffff</color><scale>0.8</scale></IconStyle></Style><Point><coordinates>103.0826,-5.0735,0</coordinates></Point></Placemark>
  </Folder><Folder><name>2022-08-14</name><open>0</open>
  <Placemark id="us6000iav7"><name>M 6.4 - southeast of the Loyalty Islands</name><description><![CDATA[<h2>M 6.4 - southeast of the Loyalty Islands</h2><p class="quicksummary"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000iav7#pager" title="PAGER estimated impact alert level" class="pager-green">PAGER - <strong class="roman">GREEN</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000iav7#shakemap" title="ShakeMap maximum estimated intensity" class="mmi-I">ShakeMap - <strong class="roman">I</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000iav7#dyfi" class="mmi-II" title="Did You Feel It? maximum reported intensity (3 reports)">DYFI? - <strong class="roman">II</strong></a></p><dl><dt>Time</dt><dd>2022-08-14 21:04:44 UTC</dd><dd>2022-08-14 21:04:44 UTC at epicenter</dd><dt>Location</dt><dd>22.078&deg;S 170.966&deg;E</dd><dt>Depth</dt><dd>78.00 km (48.47 mi)</dd></dl><p class="links"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000iav7">Details from USGS web site</a><br/><a href="https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000iav7&amp;format=kml">Google Earth KML layers for this event</a></p>]]></description><Snippet maxLines="0"></Snippet><LookAt><longitude>170.966</longitude><latitude>-22.0781</latitude><range>1000000</range></LookAt><styleUrl>#circle</styleUrl><Style><IconStyle><color>ddffffff</color><scale>0.8</scale></IconStyle></Style><Point><coordinates>170.966,-22.0781,0</coordinates></Point></Placemark>
  <Placemark id="us6000iasi"><name>M 6.6 - </name><description><![CDATA[<h2>M 6.6 - </h2><p class="quicksummary"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000iasi#pager" title="PAGER estimated impact alert level" class="pager-green">PAGER - <strong class="roman">GREEN</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000iasi#shakemap" title="ShakeMap maximum estimated intensity" class="mmi-VI">ShakeMap - <strong class="roman">VI</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000iasi#dyfi" class="mmi-VII" title="Did You Feel It? maximum reported intensity (2 reports)">DYFI? - <strong class="roman">VII</strong></a> <a class="tsunamilogo" href="http://www.tsunami.gov/" title="Tsunami Warning Center"> <img src="https://earthquake.usgs.gov/earthquakes/feed/v1.0/images/tsunami-wave-warning.jpg" alt="Tsunami Warning Center"/></a></p><dl><dt>Time</dt><dd>2022-08-14 13:44:19 UTC</dd><dd>2022-08-14 13:44:19 UTC at epicenter</dd><dt>Location</dt><dd>32.736&deg;S 179.009&deg;W</dd><dt>Depth</dt><dd>30.00 km (18.64 mi)</dd></dl><p class="links"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000iasi">Details from USGS web site</a><br/><a href="https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000iasi&amp;format=kml">Google Earth KML layers for this event</a></p>]]></description><Snippet maxLines="0"></Snippet><LookAt><longitude>-179.0088</longitude><latitude>-32.7361</latitude><range>1000000</range></LookAt><styleUrl>#circle</styleUrl><Style><IconStyle><color>ddffffff</color><scale>0.8</scale></IconStyle></Style><Point><coordinates>-179.0088,-32.7361,0</coordinates></Point></Placemark>
  <Placemark id="us6000ianq"><name>M 5.9 - 32 km SSW of Luganville, Vanuatu</name><description><![CDATA[<h2>M 5.9 - 32 km SSW of Luganville, Vanuatu</h2><p class="quicksummary"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000ianq#pager" title="PAGER estimated impact alert level" class="pager-green">PAGER - <strong class="roman">GREEN</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000ianq#shakemap" title="ShakeMap maximum estimated intensity" class="mmi-VI">ShakeMap - <strong class="roman">VI</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000ianq#dyfi" class="mmi-II" title="Did You Feel It? maximum reported intensity (1 reports)">DYFI? - <strong class="roman">II</strong></a></p><dl><dt>Time</dt><dd>2022-08-14 03:11:50 UTC</dd><dd>2022-08-14 03:11:50 UTC at epicenter</dd><dt>Location</dt><dd>15.798&deg;S 167.059&deg;E</dd><dt>Depth</dt><dd>10.00 km (6.21 mi)</dd></dl><p class="links"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000ianq">Details from USGS web site</a><br/><a href="https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000ianq&amp;format=kml">Google Earth KML layers for this event</a></p>]]></description><Snippet maxLines="0"></Snippet><LookAt><longitude>167.0591</longitude><latitude>-15.7976</latitude><range>1000000</range></LookAt><styleUrl>#circle</styleUrl><Style><IconStyle><color>ddffffff</color><scale>0.6</scale></IconStyle></Style><Point><coordinates>167.0591,-15.7976,0</coordinates></Point></Placemark>
  </Folder><Folder><name>2022-08-13</name><open>0</open>
  <Placemark id="us6000iakp"><name>M 5.9 - 88 km NW of Finschhafen, Papua New Guinea</name><description><![CDATA[<h2>M 5.9 - 88 km NW of Finschhafen, Papua New Guinea</h2><p class="quicksummary"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000iakp#pager" title="PAGER estimated impact alert level" class="pager-green">PAGER - <strong class="roman">GREEN</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000iakp#shakemap" title="ShakeMap maximum estimated intensity" class="mmi-V">ShakeMap - <strong class="roman">V</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000iakp#dyfi" class="mmi-IV" title="Did You Feel It? maximum reported intensity (9 reports)">DYFI? - <strong class="roman">IV</strong></a></p><dl><dt>Time</dt><dd>2022-08-13 18:57:17 UTC</dd><dd>2022-08-13 18:57:17 UTC at epicenter</dd><dt>Location</dt><dd>5.981&deg;S 147.294&deg;E</dd><dt>Depth</dt><dd>58.44 km (36.31 mi)</dd></dl><p class="links"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000iakp">Details from USGS web site</a><br/><a href="https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000iakp&amp;format=kml">Google Earth KML layers for this event</a></p>]]></description><Snippet maxLines="0"></Snippet><LookAt><longitude>147.2941</longitude><latitude>-5.9807</latitude><range>1000000</range></LookAt><styleUrl>#circle</styleUrl><Style><IconStyle><color>ddffffff</color><scale>0.6</scale></IconStyle></Style><Point><coordinates>147.2941,-5.9807,0</coordinates></Point></Placemark>
  <Placemark id="us6000iag5"><name>M 5.8 - 26 km WNW of Gadung, Philippines</name><description><![CDATA[<h2>M 5.8 - 26 km WNW of Gadung, Philippines</h2><p class="quicksummary"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000iag5#pager" title="PAGER estimated impact alert level" class="pager-green">PAGER - <strong class="roman">GREEN</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000iag5#shakemap" title="ShakeMap maximum estimated intensity" class="mmi-VI">ShakeMap - <strong class="roman">VI</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000iag5#dyfi" class="mmi-VI" title="Did You Feel It? maximum reported intensity (17 reports)">DYFI? - <strong class="roman">VI</strong></a></p><dl><dt>Time</dt><dd>2022-08-13 06:25:32 UTC</dd><dd>2022-08-13 06:25:32 UTC at epicenter</dd><dt>Location</dt><dd>6.907&deg;N 123.801&deg;E</dd><dt>Depth</dt><dd>22.76 km (14.14 mi)</dd></dl><p class="links"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000iag5">Details from USGS web site</a><br/><a href="https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000iag5&amp;format=kml">Google Earth KML layers for this event</a></p>]]></description><Snippet maxLines="0"></Snippet><LookAt><longitude>123.8005</longitude><latitude>6.907</latitude><range>1000000</range></LookAt><styleUrl>#circle</styleUrl><Style><IconStyle><color>ddffffff</color><scale>0.6</scale></IconStyle></Style><Point><coordinates>123.8005,6.907,0</coordinates></Point></Placemark>
  </Folder>


  <Folder><name>2022-08-12</name><open>0</open>
  <Placemark id="us6000iasi"><name>M 6.6 - </name><description><![CDATA[<h2>M 6.6 - </h2><p class="quicksummary"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000iasi#pager" title="PAGER estimated impact alert level" class="pager-green">PAGER - <strong class="roman">GREEN</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000iasi#shakemap" title="ShakeMap maximum estimated intensity" class="mmi-VI">ShakeMap - <strong class="roman">VI</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000iasi#dyfi" class="mmi-VII" title="Did You Feel It? maximum reported intensity (2 reports)">DYFI? - <strong class="roman">VII</strong></a> <a class="tsunamilogo" href="http://www.tsunami.gov/" title="Tsunami Warning Center"> <img src="https://earthquake.usgs.gov/earthquakes/feed/v1.0/images/tsunami-wave-warning.jpg" alt="Tsunami Warning Center"/></a></p><dl><dt>Time</dt><dd>2022-08-14 13:44:19 UTC</dd><dd>2022-08-14 13:44:19 UTC at epicenter</dd><dt>Location</dt><dd>32.736&deg;S 179.009&deg;W</dd><dt>Depth</dt><dd>30.00 km (18.64 mi)</dd></dl><p class="links"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000iasi">Details from USGS web site</a><br/><a href="https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000iasi&amp;format=kml">Google Earth KML layers for this event</a></p>]]></description><Snippet maxLines="0"></Snippet><LookAt><longitude>-179.0088</longitude><latitude>-32.7361</latitude><range>1000000</range></LookAt><styleUrl>#circle</styleUrl><Style><IconStyle><color>ddffffff</color><scale>0.8</scale></IconStyle></Style><Point><coordinates>${Math.random()},${Math.random()},${0}</coordinates></Point></Placemark>
  </Folder>


  <ScreenOverlay><name>Legend</name><Icon><href>https://earthquake.usgs.gov/earthquakes/feed/v1.0/images/kml_age_legend.png</href></Icon><overlayXY x="0" y="380" xunits="pixels" yunits="pixels"/><screenXY x="5" y="1" xunits="pixels" yunits="fraction"/><rotationXY x="0" y="0" xunits="pixels" yunits="pixels"/><size x="0" y="0" xunits="pixels" yunits="pixels"/></ScreenOverlay><ScreenOverlay><name>USGS Logo</name><Icon><href>https://earthquake.usgs.gov/earthquakes/feed/v1.0/images/kml_usgs_logo.png</href></Icon><overlayXY x="1" y="0" xunits="fraction" yunits="pixels"/><screenXY x=".82" y="30" xunits="fraction" yunits="pixels"/><rotationXY x="0" y="0" xunits="pixels" yunits="pixels"/><size x="0" y="0" xunits="pixels" yunits="pixels"/></ScreenOverlay>
  </Document></kml>
  `);
});

app.listen(port);