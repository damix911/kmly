import express from "express";

const app = express()
const port = process.env["PORT"];

app.get('/', (_req, res) => {
  res.send('Hello World!')
});

app.get('/kml/earthquakes.kml', (_req, res) => {
  const t = (Date.now() / 1000) % 300;
  const p = 2 * Math.PI * 0.05 * t;

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

      <Style id="circle-inactive">
        <IconStyle><Icon><href>https://earthquake.usgs.gov/earthquakes/feed/v1.0/images/kml_circle.png</href></Icon></IconStyle>
        <LabelStyle><scale>0</scale></LabelStyle>
        <BalloonStyle><text><![CDATA[<style>h2{margin-bottom:0;font-size:16px;font-weight:bold;}.quicksummary{float:left;}.quicksummary>a{float:left;display:block;padding:4px;margin-right:8px;text-decoration:none;border:1pxsolid#333;}.quicksummary>a.tsunamilogo{padding:0;}.roman{font-family:Georgia,Times,serif;}.pager-pending{background-color:#FFF;color:#000;}.pager-green{background-color:#00b04f;color:#fff;}.pager-yellow{background-color:#ff0;color:#000;}.pager-orange{background-color:#f90;color:#000;}.pager-red{background-color:#f00;color:#fff;}.mmi-I{color:#000;background-color:#FFFFFF;}.mmi-II{color:#000;background-color:#ACD8E9;}.mmi-III{color:#000;background-color:#ACD8E9;}.mmi-IV{color:#000;background-color:#83D0DA;}.mmi-V{color:#000;background-color:#7BC87F;}.mmi-VI{color:#000;background-color:#F9F518;}.mmi-VII{color:#000;background-color:#FAC611;}.mmi-VIII{color:#000;background-color:#FA8A11;}.mmi-IX{color:#FFF;background-color:#F7100C;}.mmi-X{color:#FFF;background-color:#C80F0A;}.mmi-XI{color:#FFF;background-color:#C80F0A;}.mmi-XII{color:#FFF;background-color:#C80F0A;}dl{clear:left;font-family:Helvetica;line-height:1.3;}dt{color:#999;margin-top:.5em;}dd{margin:0;}.links{clear:both;line-height:1.3;}</style><img src="https://earthquake.usgs.gov/earthquakes/feed/v1.0/images/kml_banner.jpg" alt="USGS" width="400" height="40"/>$[description]<img src="https://earthquake.usgs.gov/earthquakes/feed/v1.0/images/anss.gif" alt="ANSS" width="100" height="31"/>]]></text></BalloonStyle>
      </Style>
        
      <Style id="circle-active">
        <IconStyle><Icon><href>https://earthquake.usgs.gov/earthquakes/feed/v1.0/images/kml_circle.png</href></Icon></IconStyle>
        <LabelStyle><scale>1</scale></LabelStyle><BalloonStyle><text><![CDATA[<style>h2{margin-bottom:0;font-size:16px;font-weight:bold;}.quicksummary{float:left;}.quicksummary>a{float:left;display:block;padding:4px;margin-right:8px;text-decoration:none;border:1pxsolid#333;}.quicksummary>a.tsunamilogo{padding:0;}.roman{font-family:Georgia,Times,serif;}.pager-pending{background-color:#FFF;color:#000;}.pager-green{background-color:#00b04f;color:#fff;}.pager-yellow{background-color:#ff0;color:#000;}.pager-orange{background-color:#f90;color:#000;}.pager-red{background-color:#f00;color:#fff;}.mmi-I{color:#000;background-color:#FFFFFF;}.mmi-II{color:#000;background-color:#ACD8E9;}.mmi-III{color:#000;background-color:#ACD8E9;}.mmi-IV{color:#000;background-color:#83D0DA;}.mmi-V{color:#000;background-color:#7BC87F;}.mmi-VI{color:#000;background-color:#F9F518;}.mmi-VII{color:#000;background-color:#FAC611;}.mmi-VIII{color:#000;background-color:#FA8A11;}.mmi-IX{color:#FFF;background-color:#F7100C;}.mmi-X{color:#FFF;background-color:#C80F0A;}.mmi-XI{color:#FFF;background-color:#C80F0A;}.mmi-XII{color:#FFF;background-color:#C80F0A;}dl{clear:left;font-family:Helvetica;line-height:1.3;}dt{color:#999;margin-top:.5em;}dd{margin:0;}.links{clear:both;line-height:1.3;}</style><img src="https://earthquake.usgs.gov/earthquakes/feed/v1.0/images/kml_banner.jpg" alt="USGS" width="400" height="40"/>$[description]<img src="https://earthquake.usgs.gov/earthquakes/feed/v1.0/images/anss.gif" alt="ANSS" width="100" height="31"/>]]></text></BalloonStyle>
      </Style>
        
      <StyleMap id="circle"><Pair><key>normal</key><styleUrl>#circle-inactive</styleUrl></Pair><Pair><key>highlight</key><styleUrl>#circle-active</styleUrl></Pair></StyleMap>

      <Folder>
        <name>2022-08-12</name>
        <open>0</open>
        <Placemark id="us6000iasi"><name>M 6.6 - </name><description><![CDATA[<h2>M 6.6 - </h2><p class="quicksummary"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000iasi#pager" title="PAGER estimated impact alert level" class="pager-green">PAGER - <strong class="roman">GREEN</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000iasi#shakemap" title="ShakeMap maximum estimated intensity" class="mmi-VI">ShakeMap - <strong class="roman">VI</strong></a> <a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000iasi#dyfi" class="mmi-VII" title="Did You Feel It? maximum reported intensity (2 reports)">DYFI? - <strong class="roman">VII</strong></a> <a class="tsunamilogo" href="http://www.tsunami.gov/" title="Tsunami Warning Center"> <img src="https://earthquake.usgs.gov/earthquakes/feed/v1.0/images/tsunami-wave-warning.jpg" alt="Tsunami Warning Center"/></a></p><dl><dt>Time</dt><dd>2022-08-14 13:44:19 UTC</dd><dd>2022-08-14 13:44:19 UTC at epicenter</dd><dt>Location</dt><dd>32.736&deg;S 179.009&deg;W</dd><dt>Depth</dt><dd>30.00 km (18.64 mi)</dd></dl><p class="links"><a href="https://earthquake.usgs.gov/earthquakes/eventpage/us6000iasi">Details from USGS web site</a><br/><a href="https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000iasi&amp;format=kml">Google Earth KML layers for this event</a></p>]]></description><Snippet maxLines="0"></Snippet><LookAt><longitude>-179.0088</longitude><latitude>-32.7361</latitude><range>1000000</range></LookAt><styleUrl>#circle</styleUrl><Style><IconStyle><color>ddffffff</color><scale>0.8</scale></IconStyle></Style><Point><coordinates>${11.2558 + 10 * Math.cos(p)},${43.7696 + 10 * Math.sin(p)},${0}</coordinates></Point></Placemark>
      </Folder>
    </Document>
  </kml>
  `);
});

app.listen(port);