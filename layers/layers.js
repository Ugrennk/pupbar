var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Povrsinezaobradusanacijuiskladistenjeotpada_1 = new ol.format.GeoJSON();
var features_Povrsinezaobradusanacijuiskladistenjeotpada_1 = format_Povrsinezaobradusanacijuiskladistenjeotpada_1.readFeatures(json_Povrsinezaobradusanacijuiskladistenjeotpada_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Povrsinezaobradusanacijuiskladistenjeotpada_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Povrsinezaobradusanacijuiskladistenjeotpada_1.addFeatures(features_Povrsinezaobradusanacijuiskladistenjeotpada_1);
var lyr_Povrsinezaobradusanacijuiskladistenjeotpada_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Povrsinezaobradusanacijuiskladistenjeotpada_1, 
                style: style_Povrsinezaobradusanacijuiskladistenjeotpada_1,
                popuplayertitle: 'Povrsine za obradu, sanaciju i skladistenje otpada',
                interactive: true,
                title: '<img src="styles/legend/Povrsinezaobradusanacijuiskladistenjeotpada_1.png" /> Povrsine za obradu, sanaciju i skladistenje otpada'
            });
var format_Ostaleprirodnepovrsine_2 = new ol.format.GeoJSON();
var features_Ostaleprirodnepovrsine_2 = format_Ostaleprirodnepovrsine_2.readFeatures(json_Ostaleprirodnepovrsine_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ostaleprirodnepovrsine_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ostaleprirodnepovrsine_2.addFeatures(features_Ostaleprirodnepovrsine_2);
var lyr_Ostaleprirodnepovrsine_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ostaleprirodnepovrsine_2, 
                style: style_Ostaleprirodnepovrsine_2,
                popuplayertitle: 'Ostale prirodne povrsine',
                interactive: true,
                title: '<img src="styles/legend/Ostaleprirodnepovrsine_2.png" /> Ostale prirodne povrsine'
            });
var format_Sume_3 = new ol.format.GeoJSON();
var features_Sume_3 = format_Sume_3.readFeatures(json_Sume_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sume_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sume_3.addFeatures(features_Sume_3);
var lyr_Sume_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sume_3, 
                style: style_Sume_3,
                popuplayertitle: 'Sume',
                interactive: true,
                title: '<img src="styles/legend/Sume_3.png" /> Sume'
            });
var format_Poljoprivrednepovrsine_4 = new ol.format.GeoJSON();
var features_Poljoprivrednepovrsine_4 = format_Poljoprivrednepovrsine_4.readFeatures(json_Poljoprivrednepovrsine_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poljoprivrednepovrsine_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poljoprivrednepovrsine_4.addFeatures(features_Poljoprivrednepovrsine_4);
var lyr_Poljoprivrednepovrsine_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poljoprivrednepovrsine_4, 
                style: style_Poljoprivrednepovrsine_4,
                popuplayertitle: 'Poljoprivredne povrsine',
                interactive: true,
                title: '<img src="styles/legend/Poljoprivrednepovrsine_4.png" /> Poljoprivredne povrsine'
            });
var format_Povrsinenaselja_5 = new ol.format.GeoJSON();
var features_Povrsinenaselja_5 = format_Povrsinenaselja_5.readFeatures(json_Povrsinenaselja_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Povrsinenaselja_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Povrsinenaselja_5.addFeatures(features_Povrsinenaselja_5);
var lyr_Povrsinenaselja_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Povrsinenaselja_5, 
                style: style_Povrsinenaselja_5,
                popuplayertitle: 'Povrsine naselja',
                interactive: true,
                title: '<img src="styles/legend/Povrsinenaselja_5.png" /> Povrsine naselja'
            });
var format_Povrsinezaturizam_6 = new ol.format.GeoJSON();
var features_Povrsinezaturizam_6 = format_Povrsinezaturizam_6.readFeatures(json_Povrsinezaturizam_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Povrsinezaturizam_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Povrsinezaturizam_6.addFeatures(features_Povrsinezaturizam_6);
var lyr_Povrsinezaturizam_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Povrsinezaturizam_6, 
                style: style_Povrsinezaturizam_6,
                popuplayertitle: 'Povrsine za turizam',
                interactive: true,
                title: '<img src="styles/legend/Povrsinezaturizam_6.png" /> Povrsine za turizam'
            });
var format_Koncesionapodrucja_7 = new ol.format.GeoJSON();
var features_Koncesionapodrucja_7 = format_Koncesionapodrucja_7.readFeatures(json_Koncesionapodrucja_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Koncesionapodrucja_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Koncesionapodrucja_7.addFeatures(features_Koncesionapodrucja_7);
var lyr_Koncesionapodrucja_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Koncesionapodrucja_7, 
                style: style_Koncesionapodrucja_7,
                popuplayertitle: 'Koncesiona podrucja',
                interactive: true,
                title: '<img src="styles/legend/Koncesionapodrucja_7.png" /> Koncesiona podrucja'
            });
var format_NovagranicaNP_8 = new ol.format.GeoJSON();
var features_NovagranicaNP_8 = format_NovagranicaNP_8.readFeatures(json_NovagranicaNP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NovagranicaNP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NovagranicaNP_8.addFeatures(features_NovagranicaNP_8);
var lyr_NovagranicaNP_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NovagranicaNP_8, 
                style: style_NovagranicaNP_8,
                popuplayertitle: 'Nova granica NP',
                interactive: true,
                title: '<img src="styles/legend/NovagranicaNP_8.png" /> Nova granica NP'
            });
var format_GranicaNP_9 = new ol.format.GeoJSON();
var features_GranicaNP_9 = format_GranicaNP_9.readFeatures(json_GranicaNP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranicaNP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranicaNP_9.addFeatures(features_GranicaNP_9);
var lyr_GranicaNP_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranicaNP_9, 
                style: style_GranicaNP_9,
                popuplayertitle: 'Granica NP',
                interactive: true,
                title: '<img src="styles/legend/GranicaNP_9.png" /> Granica NP'
            });
var format_GranicaMD_10 = new ol.format.GeoJSON();
var features_GranicaMD_10 = format_GranicaMD_10.readFeatures(json_GranicaMD_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranicaMD_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranicaMD_10.addFeatures(features_GranicaMD_10);
var lyr_GranicaMD_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranicaMD_10, 
                style: style_GranicaMD_10,
                popuplayertitle: 'Granica MD',
                interactive: true,
                title: '<img src="styles/legend/GranicaMD_10.png" /> Granica MD'
            });
var format_Obalnalinija_11 = new ol.format.GeoJSON();
var features_Obalnalinija_11 = format_Obalnalinija_11.readFeatures(json_Obalnalinija_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obalnalinija_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obalnalinija_11.addFeatures(features_Obalnalinija_11);
var lyr_Obalnalinija_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obalnalinija_11, 
                style: style_Obalnalinija_11,
                popuplayertitle: 'Obalna linija',
                interactive: true,
                title: '<img src="styles/legend/Obalnalinija_11.png" /> Obalna linija'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Povrsinezaobradusanacijuiskladistenjeotpada_1.setVisible(true);lyr_Ostaleprirodnepovrsine_2.setVisible(true);lyr_Sume_3.setVisible(true);lyr_Poljoprivrednepovrsine_4.setVisible(true);lyr_Povrsinenaselja_5.setVisible(true);lyr_Povrsinezaturizam_6.setVisible(true);lyr_Koncesionapodrucja_7.setVisible(true);lyr_NovagranicaNP_8.setVisible(true);lyr_GranicaNP_9.setVisible(true);lyr_GranicaMD_10.setVisible(true);lyr_Obalnalinija_11.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Povrsinezaobradusanacijuiskladistenjeotpada_1,lyr_Ostaleprirodnepovrsine_2,lyr_Sume_3,lyr_Poljoprivrednepovrsine_4,lyr_Povrsinenaselja_5,lyr_Povrsinezaturizam_6,lyr_Koncesionapodrucja_7,lyr_NovagranicaNP_8,lyr_GranicaNP_9,lyr_GranicaMD_10,lyr_Obalnalinija_11];
lyr_Povrsinezaobradusanacijuiskladistenjeotpada_1.set('fieldAliases', {'ID': 'ID', 'Namjena': 'Namjena', 'Oznaka': 'Oznaka', });
lyr_Ostaleprirodnepovrsine_2.set('fieldAliases', {'ID': 'ID', 'Namjena': 'Namjena', 'Oznaka': 'Oznaka', });
lyr_Sume_3.set('fieldAliases', {'ID': 'ID', 'Namjena': 'Namjena', 'Oznaka': 'Oznaka', });
lyr_Poljoprivrednepovrsine_4.set('fieldAliases', {'ID': 'ID', 'Namjena': 'Namjena', 'Oznaka': 'Oznaka', });
lyr_Povrsinenaselja_5.set('fieldAliases', {'ID': 'ID', 'Namjena': 'Namjena', 'Oznaka': 'Oznaka', });
lyr_Povrsinezaturizam_6.set('fieldAliases', {'ID': 'ID', 'Namjena': 'Namjena', 'Oznaka': 'Oznaka', });
lyr_Koncesionapodrucja_7.set('fieldAliases', {'ID': 'ID', 'Namjena': 'Namjena', 'Naziv': 'Naziv', });
lyr_NovagranicaNP_8.set('fieldAliases', {'id': 'id', });
lyr_GranicaNP_9.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'RawCodeVal': 'RawCodeVal', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_GranicaMD_10.set('fieldAliases', {});
lyr_Obalnalinija_11.set('fieldAliases', {'ID': 'ID', });
lyr_Povrsinezaobradusanacijuiskladistenjeotpada_1.set('fieldImages', {'ID': 'TextEdit', 'Namjena': 'TextEdit', 'Oznaka': 'TextEdit', });
lyr_Ostaleprirodnepovrsine_2.set('fieldImages', {'ID': '', 'Namjena': '', 'Oznaka': '', });
lyr_Sume_3.set('fieldImages', {'ID': 'TextEdit', 'Namjena': 'TextEdit', 'Oznaka': 'TextEdit', });
lyr_Poljoprivrednepovrsine_4.set('fieldImages', {'ID': '', 'Namjena': '', 'Oznaka': '', });
lyr_Povrsinenaselja_5.set('fieldImages', {'ID': 'TextEdit', 'Namjena': 'TextEdit', 'Oznaka': 'TextEdit', });
lyr_Povrsinezaturizam_6.set('fieldImages', {'ID': 'TextEdit', 'Namjena': 'TextEdit', 'Oznaka': 'TextEdit', });
lyr_Koncesionapodrucja_7.set('fieldImages', {'ID': '', 'Namjena': '', 'Naziv': '', });
lyr_NovagranicaNP_8.set('fieldImages', {'id': '', });
lyr_GranicaNP_9.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'RawCodeVal': '', 'Linetype': '', 'EntityHand': '', 'Text': '', 'ogr_style': '', 'font': '', 'angle': '', 'size': '', 'size_u': '', 'anchor': '', 'color': '', 'underline': '', 'plaintext': '', 'fcolor': '', 'flnum': '', 'bold': '', 'italic': '', 'dx': '', 'dx_u': '', 'dy': '', 'dy_u': '', });
lyr_GranicaMD_10.set('fieldImages', {});
lyr_Obalnalinija_11.set('fieldImages', {'ID': 'TextEdit', });
lyr_Povrsinezaobradusanacijuiskladistenjeotpada_1.set('fieldLabels', {'ID': 'no label', 'Namjena': 'no label', 'Oznaka': 'no label', });
lyr_Ostaleprirodnepovrsine_2.set('fieldLabels', {'ID': 'no label', 'Namjena': 'no label', 'Oznaka': 'no label', });
lyr_Sume_3.set('fieldLabels', {'ID': 'no label', 'Namjena': 'no label', 'Oznaka': 'no label', });
lyr_Poljoprivrednepovrsine_4.set('fieldLabels', {'ID': 'no label', 'Namjena': 'no label', 'Oznaka': 'no label', });
lyr_Povrsinenaselja_5.set('fieldLabels', {'ID': 'no label', 'Namjena': 'no label', 'Oznaka': 'no label', });
lyr_Povrsinezaturizam_6.set('fieldLabels', {'ID': 'no label', 'Namjena': 'no label', 'Oznaka': 'no label', });
lyr_Koncesionapodrucja_7.set('fieldLabels', {'ID': 'no label', 'Namjena': 'no label', 'Naziv': 'no label', });
lyr_NovagranicaNP_8.set('fieldLabels', {'id': 'no label', });
lyr_GranicaNP_9.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'RawCodeVal': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_GranicaMD_10.set('fieldLabels', {});
lyr_Obalnalinija_11.set('fieldLabels', {'ID': 'no label', });
lyr_Obalnalinija_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});