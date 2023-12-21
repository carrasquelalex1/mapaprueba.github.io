var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Estados_Venezuela_1 = new ol.format.GeoJSON();
var features_Estados_Venezuela_1 = format_Estados_Venezuela_1.readFeatures(json_Estados_Venezuela_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estados_Venezuela_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estados_Venezuela_1.addFeatures(features_Estados_Venezuela_1);
var lyr_Estados_Venezuela_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estados_Venezuela_1, 
                style: style_Estados_Venezuela_1,
                interactive: true,
    title: 'Estados_Venezuela<br />\
    <img src="styles/legend/Estados_Venezuela_1_0.png" /> 0 - 0<br />\
    <img src="styles/legend/Estados_Venezuela_1_1.png" /> 0 - 1000<br />\
    <img src="styles/legend/Estados_Venezuela_1_2.png" /> 1000 - 1400<br />\
    <img src="styles/legend/Estados_Venezuela_1_3.png" /> 1400 - 1900<br />\
    <img src="styles/legend/Estados_Venezuela_1_4.png" /> 1900 - 2400<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_Estados_Venezuela_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Estados_Venezuela_1];
lyr_Estados_Venezuela_1.set('fieldAliases', {'ID': 'ID', 'ESTADO': 'ESTADO', 'casosm': 'casosm', });
lyr_Estados_Venezuela_1.set('fieldImages', {'ID': '', 'ESTADO': '', 'casosm': '', });
lyr_Estados_Venezuela_1.set('fieldLabels', {'ID': 'no label', 'ESTADO': 'inline label', 'casosm': 'inline label', });
lyr_Estados_Venezuela_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});