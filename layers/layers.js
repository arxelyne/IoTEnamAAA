var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: 'ADMINISTRASIDESA_AR_25K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_1.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_Road_2 = new ol.format.GeoJSON();
var features_Road_2 = format_Road_2.readFeatures(json_Road_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_2.addFeatures(features_Road_2);
var lyr_Road_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_2, 
                style: style_Road_2,
                popuplayertitle: 'Road',
                interactive: true,
                title: '<img src="styles/legend/Road_2.png" /> Road'
            });
var format_Building_3 = new ol.format.GeoJSON();
var features_Building_3 = format_Building_3.readFeatures(json_Building_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building_3.addFeatures(features_Building_3);
var lyr_Building_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building_3, 
                style: style_Building_3,
                popuplayertitle: 'Building',
                interactive: true,
    title: 'Building<br />\
    <img src="styles/legend/Building_3_0.png" /> apartments<br />\
    <img src="styles/legend/Building_3_1.png" /> bank<br />\
    <img src="styles/legend/Building_3_2.png" /> car_shop<br />\
    <img src="styles/legend/Building_3_3.png" /> church<br />\
    <img src="styles/legend/Building_3_4.png" /> clinic<br />\
    <img src="styles/legend/Building_3_5.png" /> college<br />\
    <img src="styles/legend/Building_3_6.png" /> community_group_office<br />\
    <img src="styles/legend/Building_3_7.png" /> convenience<br />\
    <img src="styles/legend/Building_3_8.png" /> fire_station<br />\
    <img src="styles/legend/Building_3_9.png" /> government_office<br />\
    <img src="styles/legend/Building_3_10.png" /> guest_house<br />\
    <img src="styles/legend/Building_3_11.png" /> home<br />\
    <img src="styles/legend/Building_3_12.png" /> hospital<br />\
    <img src="styles/legend/Building_3_13.png" /> house<br />\
    <img src="styles/legend/Building_3_14.png" /> industrial<br />\
    <img src="styles/legend/Building_3_15.png" /> kindergarten<br />\
    <img src="styles/legend/Building_3_16.png" /> mall<br />\
    <img src="styles/legend/Building_3_17.png" /> marketplace<br />\
    <img src="styles/legend/Building_3_18.png" /> mosque<br />\
    <img src="styles/legend/Building_3_19.png" /> office<br />\
    <img src="styles/legend/Building_3_20.png" /> pharmacy<br />\
    <img src="styles/legend/Building_3_21.png" /> police<br />\
    <img src="styles/legend/Building_3_22.png" /> post_office<br />\
    <img src="styles/legend/Building_3_23.png" /> power_substation<br />\
    <img src="styles/legend/Building_3_24.png" /> pumping_station<br />\
    <img src="styles/legend/Building_3_25.png" /> residential<br />\
    <img src="styles/legend/Building_3_26.png" /> retail<br />\
    <img src="styles/legend/Building_3_27.png" /> roof<br />\
    <img src="styles/legend/Building_3_28.png" /> school<br />\
    <img src="styles/legend/Building_3_29.png" /> sports_centre<br />\
    <img src="styles/legend/Building_3_30.png" /> subdistrict_office<br />\
    <img src="styles/legend/Building_3_31.png" /> supermarket<br />\
    <img src="styles/legend/Building_3_32.png" /> temple<br />\
    <img src="styles/legend/Building_3_33.png" /> university<br />\
    <img src="styles/legend/Building_3_34.png" /> village_office<br />\
    <img src="styles/legend/Building_3_35.png" /> warehouse<br />\
    <img src="styles/legend/Building_3_36.png" /> yes<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_Road_2.setVisible(true);lyr_Building_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_Road_2,lyr_Building_3];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Road_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', });
lyr_Building_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'amenity': 'amenity', 'brand': 'brand', 'wheelchair': 'wheelchair', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Road_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'name': '', 'surface': '', 'maxspeed': '', 'ref': '', });
lyr_Building_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'brand': 'TextEdit', 'wheelchair': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Road_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name': 'no label', 'surface': 'no label', 'maxspeed': 'no label', 'ref': 'no label', });
lyr_Building_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'amenity': 'no label', 'brand': 'no label', 'wheelchair': 'no label', });
lyr_Building_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});