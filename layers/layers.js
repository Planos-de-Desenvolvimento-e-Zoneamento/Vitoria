ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-40.353979, -20.353183, -40.247029, -20.293751]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ImveisTombados_1 = new ol.format.GeoJSON();
var features_ImveisTombados_1 = format_ImveisTombados_1.readFeatures(json_ImveisTombados_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ImveisTombados_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImveisTombados_1.addFeatures(features_ImveisTombados_1);
cluster_ImveisTombados_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ImveisTombados_1
});
var lyr_ImveisTombados_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ImveisTombados_1, 
                style: style_ImveisTombados_1,
                popuplayertitle: 'Imóveis Tombados ',
                interactive: true,
                title: '<img src="styles/legend/ImveisTombados_1.png" /> Imóveis Tombados '
            });
var format_UnidadesdeConservao_2 = new ol.format.GeoJSON();
var features_UnidadesdeConservao_2 = format_UnidadesdeConservao_2.readFeatures(json_UnidadesdeConservao_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UnidadesdeConservao_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeConservao_2.addFeatures(features_UnidadesdeConservao_2);
var lyr_UnidadesdeConservao_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeConservao_2, 
                style: style_UnidadesdeConservao_2,
                popuplayertitle: 'Unidades de Conservação ',
                interactive: true,
                title: '<img src="styles/legend/UnidadesdeConservao_2.png" /> Unidades de Conservação '
            });
var format_reasUrbanaseRurais_3 = new ol.format.GeoJSON();
var features_reasUrbanaseRurais_3 = format_reasUrbanaseRurais_3.readFeatures(json_reasUrbanaseRurais_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasUrbanaseRurais_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasUrbanaseRurais_3.addFeatures(features_reasUrbanaseRurais_3);
var lyr_reasUrbanaseRurais_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasUrbanaseRurais_3, 
                style: style_reasUrbanaseRurais_3,
                popuplayertitle: 'Áreas Urbanas e Rurais ',
                interactive: true,
                title: '<img src="styles/legend/reasUrbanaseRurais_3.png" /> Áreas Urbanas e Rurais '
            });
var format_FundeadourosLongoPrazo_4 = new ol.format.GeoJSON();
var features_FundeadourosLongoPrazo_4 = format_FundeadourosLongoPrazo_4.readFeatures(json_FundeadourosLongoPrazo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosLongoPrazo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosLongoPrazo_4.addFeatures(features_FundeadourosLongoPrazo_4);
var lyr_FundeadourosLongoPrazo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosLongoPrazo_4, 
                style: style_FundeadourosLongoPrazo_4,
                popuplayertitle: 'Fundeadouros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosLongoPrazo_4.png" /> Fundeadouros - Longo Prazo '
            });
var format_FundeadourosMdioPrazo_5 = new ol.format.GeoJSON();
var features_FundeadourosMdioPrazo_5 = format_FundeadourosMdioPrazo_5.readFeatures(json_FundeadourosMdioPrazo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosMdioPrazo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosMdioPrazo_5.addFeatures(features_FundeadourosMdioPrazo_5);
var lyr_FundeadourosMdioPrazo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosMdioPrazo_5, 
                style: style_FundeadourosMdioPrazo_5,
                popuplayertitle: 'Fundeadouros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosMdioPrazo_5.png" /> Fundeadouros - Médio Prazo '
            });
var format_FundeadourosCurtoPrazo_6 = new ol.format.GeoJSON();
var features_FundeadourosCurtoPrazo_6 = format_FundeadourosCurtoPrazo_6.readFeatures(json_FundeadourosCurtoPrazo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosCurtoPrazo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosCurtoPrazo_6.addFeatures(features_FundeadourosCurtoPrazo_6);
var lyr_FundeadourosCurtoPrazo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosCurtoPrazo_6, 
                style: style_FundeadourosCurtoPrazo_6,
                popuplayertitle: 'Fundeadouros - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosCurtoPrazo_6.png" /> Fundeadouros - Curto Prazo '
            });
var format_FundeadourosSituaoAtual_7 = new ol.format.GeoJSON();
var features_FundeadourosSituaoAtual_7 = format_FundeadourosSituaoAtual_7.readFeatures(json_FundeadourosSituaoAtual_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosSituaoAtual_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosSituaoAtual_7.addFeatures(features_FundeadourosSituaoAtual_7);
var lyr_FundeadourosSituaoAtual_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosSituaoAtual_7, 
                style: style_FundeadourosSituaoAtual_7,
                popuplayertitle: 'Fundeadouros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosSituaoAtual_7.png" /> Fundeadouros - Situação Atual '
            });
var format_BaciasdeEvoluoLongoPrazo_8 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoLongoPrazo_8 = format_BaciasdeEvoluoLongoPrazo_8.readFeatures(json_BaciasdeEvoluoLongoPrazo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoLongoPrazo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoLongoPrazo_8.addFeatures(features_BaciasdeEvoluoLongoPrazo_8);
var lyr_BaciasdeEvoluoLongoPrazo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoLongoPrazo_8, 
                style: style_BaciasdeEvoluoLongoPrazo_8,
                popuplayertitle: 'Bacias de Evolução - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoLongoPrazo_8.png" /> Bacias de Evolução - Longo Prazo '
            });
var format_BaciasdeEvoluoMdioPrazo_9 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoMdioPrazo_9 = format_BaciasdeEvoluoMdioPrazo_9.readFeatures(json_BaciasdeEvoluoMdioPrazo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoMdioPrazo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoMdioPrazo_9.addFeatures(features_BaciasdeEvoluoMdioPrazo_9);
var lyr_BaciasdeEvoluoMdioPrazo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoMdioPrazo_9, 
                style: style_BaciasdeEvoluoMdioPrazo_9,
                popuplayertitle: 'Bacias de Evolução - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoMdioPrazo_9.png" /> Bacias de Evolução - Médio Prazo '
            });
var format_BaciasdeEvoluoCurtoPrazo_10 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoCurtoPrazo_10 = format_BaciasdeEvoluoCurtoPrazo_10.readFeatures(json_BaciasdeEvoluoCurtoPrazo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoCurtoPrazo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoCurtoPrazo_10.addFeatures(features_BaciasdeEvoluoCurtoPrazo_10);
var lyr_BaciasdeEvoluoCurtoPrazo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoCurtoPrazo_10, 
                style: style_BaciasdeEvoluoCurtoPrazo_10,
                popuplayertitle: 'Bacias de Evolução - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoCurtoPrazo_10.png" /> Bacias de Evolução - Curto Prazo '
            });
var format_BaciasdeEvoluoSituaoAtual_11 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoSituaoAtual_11 = format_BaciasdeEvoluoSituaoAtual_11.readFeatures(json_BaciasdeEvoluoSituaoAtual_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoSituaoAtual_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoSituaoAtual_11.addFeatures(features_BaciasdeEvoluoSituaoAtual_11);
var lyr_BaciasdeEvoluoSituaoAtual_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoSituaoAtual_11, 
                style: style_BaciasdeEvoluoSituaoAtual_11,
                popuplayertitle: 'Bacias de Evolução - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoSituaoAtual_11.png" /> Bacias de Evolução - Situação Atual '
            });
var format_CanaisdeAcessoLongoPrazo_12 = new ol.format.GeoJSON();
var features_CanaisdeAcessoLongoPrazo_12 = format_CanaisdeAcessoLongoPrazo_12.readFeatures(json_CanaisdeAcessoLongoPrazo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoLongoPrazo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoLongoPrazo_12.addFeatures(features_CanaisdeAcessoLongoPrazo_12);
var lyr_CanaisdeAcessoLongoPrazo_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoLongoPrazo_12, 
                style: style_CanaisdeAcessoLongoPrazo_12,
                popuplayertitle: 'Canais de Acesso - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoLongoPrazo_12.png" /> Canais de Acesso - Longo Prazo '
            });
var format_CanaisdeAcessoMdioPrazo_13 = new ol.format.GeoJSON();
var features_CanaisdeAcessoMdioPrazo_13 = format_CanaisdeAcessoMdioPrazo_13.readFeatures(json_CanaisdeAcessoMdioPrazo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoMdioPrazo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoMdioPrazo_13.addFeatures(features_CanaisdeAcessoMdioPrazo_13);
var lyr_CanaisdeAcessoMdioPrazo_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoMdioPrazo_13, 
                style: style_CanaisdeAcessoMdioPrazo_13,
                popuplayertitle: 'Canais de Acesso - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoMdioPrazo_13.png" /> Canais de Acesso - Médio Prazo '
            });
var format_CanaisdeAcessoCurtoPrazo_14 = new ol.format.GeoJSON();
var features_CanaisdeAcessoCurtoPrazo_14 = format_CanaisdeAcessoCurtoPrazo_14.readFeatures(json_CanaisdeAcessoCurtoPrazo_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoCurtoPrazo_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoCurtoPrazo_14.addFeatures(features_CanaisdeAcessoCurtoPrazo_14);
var lyr_CanaisdeAcessoCurtoPrazo_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoCurtoPrazo_14, 
                style: style_CanaisdeAcessoCurtoPrazo_14,
                popuplayertitle: 'Canais de Acesso - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoCurtoPrazo_14.png" /> Canais de Acesso - Curto Prazo '
            });
var format_CanaisdeAcessoSituaoAtual_15 = new ol.format.GeoJSON();
var features_CanaisdeAcessoSituaoAtual_15 = format_CanaisdeAcessoSituaoAtual_15.readFeatures(json_CanaisdeAcessoSituaoAtual_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoSituaoAtual_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoSituaoAtual_15.addFeatures(features_CanaisdeAcessoSituaoAtual_15);
var lyr_CanaisdeAcessoSituaoAtual_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoSituaoAtual_15, 
                style: style_CanaisdeAcessoSituaoAtual_15,
                popuplayertitle: 'Canais de Acesso - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoSituaoAtual_15.png" /> Canais de Acesso - Situação Atual '
            });
var format_AcessosDutoviriosExternos_16 = new ol.format.GeoJSON();
var features_AcessosDutoviriosExternos_16 = format_AcessosDutoviriosExternos_16.readFeatures(json_AcessosDutoviriosExternos_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosDutoviriosExternos_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosDutoviriosExternos_16.addFeatures(features_AcessosDutoviriosExternos_16);
var lyr_AcessosDutoviriosExternos_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosDutoviriosExternos_16, 
                style: style_AcessosDutoviriosExternos_16,
                popuplayertitle: 'Acessos Dutoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosDutoviriosExternos_16.png" /> Acessos Dutoviários Externos '
            });
var format_AcessosFerroviriosInternosLongoPrazo_17 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosLongoPrazo_17 = format_AcessosFerroviriosInternosLongoPrazo_17.readFeatures(json_AcessosFerroviriosInternosLongoPrazo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosLongoPrazo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosLongoPrazo_17.addFeatures(features_AcessosFerroviriosInternosLongoPrazo_17);
var lyr_AcessosFerroviriosInternosLongoPrazo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosLongoPrazo_17, 
                style: style_AcessosFerroviriosInternosLongoPrazo_17,
                popuplayertitle: 'Acessos Ferroviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosLongoPrazo_17.png" /> Acessos Ferroviários Internos - Longo Prazo '
            });
var format_AcessosFerroviriosInternosMdioPrazo_18 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosMdioPrazo_18 = format_AcessosFerroviriosInternosMdioPrazo_18.readFeatures(json_AcessosFerroviriosInternosMdioPrazo_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosMdioPrazo_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosMdioPrazo_18.addFeatures(features_AcessosFerroviriosInternosMdioPrazo_18);
var lyr_AcessosFerroviriosInternosMdioPrazo_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosMdioPrazo_18, 
                style: style_AcessosFerroviriosInternosMdioPrazo_18,
                popuplayertitle: 'Acessos Ferroviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosMdioPrazo_18.png" /> Acessos Ferroviários Internos - Médio Prazo '
            });
var format_AcessosFerroviriosInternosCurtoPrazo_19 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosCurtoPrazo_19 = format_AcessosFerroviriosInternosCurtoPrazo_19.readFeatures(json_AcessosFerroviriosInternosCurtoPrazo_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosCurtoPrazo_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosCurtoPrazo_19.addFeatures(features_AcessosFerroviriosInternosCurtoPrazo_19);
var lyr_AcessosFerroviriosInternosCurtoPrazo_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosCurtoPrazo_19, 
                style: style_AcessosFerroviriosInternosCurtoPrazo_19,
                popuplayertitle: 'Acessos Ferroviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosCurtoPrazo_19.png" /> Acessos Ferroviários Internos - Curto Prazo '
            });
var format_AcessosFerroviriosInternosSituaoAtual_20 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosSituaoAtual_20 = format_AcessosFerroviriosInternosSituaoAtual_20.readFeatures(json_AcessosFerroviriosInternosSituaoAtual_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosSituaoAtual_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosSituaoAtual_20.addFeatures(features_AcessosFerroviriosInternosSituaoAtual_20);
var lyr_AcessosFerroviriosInternosSituaoAtual_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosSituaoAtual_20, 
                style: style_AcessosFerroviriosInternosSituaoAtual_20,
                popuplayertitle: 'Acessos Ferroviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosSituaoAtual_20.png" /> Acessos Ferroviários Internos - Situação Atual '
            });
var format_AcessosFerroviriosExternos_21 = new ol.format.GeoJSON();
var features_AcessosFerroviriosExternos_21 = format_AcessosFerroviriosExternos_21.readFeatures(json_AcessosFerroviriosExternos_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosExternos_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosExternos_21.addFeatures(features_AcessosFerroviriosExternos_21);
var lyr_AcessosFerroviriosExternos_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosExternos_21, 
                style: style_AcessosFerroviriosExternos_21,
                popuplayertitle: 'Acessos Ferroviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosExternos_21.png" /> Acessos Ferroviários Externos '
            });
var format_AcessosRodoviriosInternosLongoPrazo_22 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosLongoPrazo_22 = format_AcessosRodoviriosInternosLongoPrazo_22.readFeatures(json_AcessosRodoviriosInternosLongoPrazo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosLongoPrazo_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosLongoPrazo_22.addFeatures(features_AcessosRodoviriosInternosLongoPrazo_22);
var lyr_AcessosRodoviriosInternosLongoPrazo_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosLongoPrazo_22, 
                style: style_AcessosRodoviriosInternosLongoPrazo_22,
                popuplayertitle: 'Acessos Rodoviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosLongoPrazo_22.png" /> Acessos Rodoviários Internos - Longo Prazo '
            });
var format_AcessosRodoviriosInternosMdioPrazo_23 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosMdioPrazo_23 = format_AcessosRodoviriosInternosMdioPrazo_23.readFeatures(json_AcessosRodoviriosInternosMdioPrazo_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosMdioPrazo_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosMdioPrazo_23.addFeatures(features_AcessosRodoviriosInternosMdioPrazo_23);
var lyr_AcessosRodoviriosInternosMdioPrazo_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosMdioPrazo_23, 
                style: style_AcessosRodoviriosInternosMdioPrazo_23,
                popuplayertitle: 'Acessos Rodoviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosMdioPrazo_23.png" /> Acessos Rodoviários Internos - Médio Prazo '
            });
var format_AcessosRodoviriosInternosCurtoPrazo_24 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosCurtoPrazo_24 = format_AcessosRodoviriosInternosCurtoPrazo_24.readFeatures(json_AcessosRodoviriosInternosCurtoPrazo_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosCurtoPrazo_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosCurtoPrazo_24.addFeatures(features_AcessosRodoviriosInternosCurtoPrazo_24);
var lyr_AcessosRodoviriosInternosCurtoPrazo_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosCurtoPrazo_24, 
                style: style_AcessosRodoviriosInternosCurtoPrazo_24,
                popuplayertitle: 'Acessos Rodoviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosCurtoPrazo_24.png" /> Acessos Rodoviários Internos - Curto Prazo '
            });
var format_AcessosRodoviriosInternosSituaoAtual_25 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosSituaoAtual_25 = format_AcessosRodoviriosInternosSituaoAtual_25.readFeatures(json_AcessosRodoviriosInternosSituaoAtual_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosSituaoAtual_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosSituaoAtual_25.addFeatures(features_AcessosRodoviriosInternosSituaoAtual_25);
var lyr_AcessosRodoviriosInternosSituaoAtual_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosSituaoAtual_25, 
                style: style_AcessosRodoviriosInternosSituaoAtual_25,
                popuplayertitle: 'Acessos Rodoviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosSituaoAtual_25.png" /> Acessos Rodoviários Internos - Situação Atual '
            });
var format_AcessosRodoviriosExternos_26 = new ol.format.GeoJSON();
var features_AcessosRodoviriosExternos_26 = format_AcessosRodoviriosExternos_26.readFeatures(json_AcessosRodoviriosExternos_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosExternos_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosExternos_26.addFeatures(features_AcessosRodoviriosExternos_26);
var lyr_AcessosRodoviriosExternos_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosExternos_26, 
                style: style_AcessosRodoviriosExternos_26,
                popuplayertitle: 'Acessos Rodoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosExternos_26.png" /> Acessos Rodoviários Externos '
            });
var format_TerminaldeUsoPrivado_27 = new ol.format.GeoJSON();
var features_TerminaldeUsoPrivado_27 = format_TerminaldeUsoPrivado_27.readFeatures(json_TerminaldeUsoPrivado_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TerminaldeUsoPrivado_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaldeUsoPrivado_27.addFeatures(features_TerminaldeUsoPrivado_27);
var lyr_TerminaldeUsoPrivado_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaldeUsoPrivado_27, 
                style: style_TerminaldeUsoPrivado_27,
                popuplayertitle: 'Terminal de Uso Privado ',
                interactive: true,
                title: '<img src="styles/legend/TerminaldeUsoPrivado_27.png" /> Terminal de Uso Privado '
            });
var format_reaseInstalaesAlfandegadas_28 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadas_28 = format_reaseInstalaesAlfandegadas_28.readFeatures(json_reaseInstalaesAlfandegadas_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reaseInstalaesAlfandegadas_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadas_28.addFeatures(features_reaseInstalaesAlfandegadas_28);
var lyr_reaseInstalaesAlfandegadas_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadas_28, 
                style: style_reaseInstalaesAlfandegadas_28,
                popuplayertitle: 'Áreas e Instalações Alfandegadas ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadas_28.png" /> Áreas e Instalações Alfandegadas '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_29 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_29 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_29.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_29.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_29);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_29, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_29,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_29.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_30 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_30 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_30.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_30.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_30);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_30, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_30,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_30.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_31 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_31 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_31.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_31.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_31);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_31, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_31,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_31.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_32 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_32 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_32.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_32.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_32);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_32, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_32,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_32.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_33 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_33 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_33.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_33.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_33);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_33, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_33,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_33.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_34 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_34 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_34.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_34.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_34);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_34, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_34,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_34.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_35 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_35 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_35.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_35.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_35);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_35, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_35,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_35.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasLongoPrazo_37 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasLongoPrazo_37 = format_reasNoAfetassOperaesPorturiasLongoPrazo_37.readFeatures(json_reasNoAfetassOperaesPorturiasLongoPrazo_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_37.addFeatures(features_reasNoAfetassOperaesPorturiasLongoPrazo_37);
var lyr_reasNoAfetassOperaesPorturiasLongoPrazo_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_37, 
                style: style_reasNoAfetassOperaesPorturiasLongoPrazo_37,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasLongoPrazo_37.png" /> Áreas Não Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasMdioPrazo_38 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasMdioPrazo_38 = format_reasNoAfetassOperaesPorturiasMdioPrazo_38.readFeatures(json_reasNoAfetassOperaesPorturiasMdioPrazo_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_38.addFeatures(features_reasNoAfetassOperaesPorturiasMdioPrazo_38);
var lyr_reasNoAfetassOperaesPorturiasMdioPrazo_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_38, 
                style: style_reasNoAfetassOperaesPorturiasMdioPrazo_38,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasMdioPrazo_38.png" /> Áreas Não Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasCurtoPrazo_39 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasCurtoPrazo_39 = format_reasNoAfetassOperaesPorturiasCurtoPrazo_39.readFeatures(json_reasNoAfetassOperaesPorturiasCurtoPrazo_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_39.addFeatures(features_reasNoAfetassOperaesPorturiasCurtoPrazo_39);
var lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_39, 
                style: style_reasNoAfetassOperaesPorturiasCurtoPrazo_39,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasCurtoPrazo_39.png" /> Áreas Não Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasSituaoAtual_40 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasSituaoAtual_40 = format_reasNoAfetassOperaesPorturiasSituaoAtual_40.readFeatures(json_reasNoAfetassOperaesPorturiasSituaoAtual_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_40.addFeatures(features_reasNoAfetassOperaesPorturiasSituaoAtual_40);
var lyr_reasNoAfetassOperaesPorturiasSituaoAtual_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_40, 
                style: style_reasNoAfetassOperaesPorturiasSituaoAtual_40,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasSituaoAtual_40.png" /> Áreas Não Afetas às Operações Portuárias - Situação Atual '
            });
var format_AcostagemLongoPrazo_41 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_41 = format_AcostagemLongoPrazo_41.readFeatures(json_AcostagemLongoPrazo_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemLongoPrazo_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_41.addFeatures(features_AcostagemLongoPrazo_41);
var lyr_AcostagemLongoPrazo_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_41, 
                style: style_AcostagemLongoPrazo_41,
                popuplayertitle: 'Acostagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_41.png" /> Acostagem - Longo Prazo '
            });
var format_AcostagemMdioPrazo_42 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_42 = format_AcostagemMdioPrazo_42.readFeatures(json_AcostagemMdioPrazo_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemMdioPrazo_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_42.addFeatures(features_AcostagemMdioPrazo_42);
var lyr_AcostagemMdioPrazo_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_42, 
                style: style_AcostagemMdioPrazo_42,
                popuplayertitle: 'Acostagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_42.png" /> Acostagem - Médio Prazo '
            });
var format_AcostagemCurtoPrazo_43 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_43 = format_AcostagemCurtoPrazo_43.readFeatures(json_AcostagemCurtoPrazo_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemCurtoPrazo_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_43.addFeatures(features_AcostagemCurtoPrazo_43);
var lyr_AcostagemCurtoPrazo_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_43, 
                style: style_AcostagemCurtoPrazo_43,
                popuplayertitle: 'Acostagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_43.png" /> Acostagem - Curto Prazo '
            });
var format_AcostagemSituaoAtual_44 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_44 = format_AcostagemSituaoAtual_44.readFeatures(json_AcostagemSituaoAtual_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemSituaoAtual_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_44.addFeatures(features_AcostagemSituaoAtual_44);
var lyr_AcostagemSituaoAtual_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_44, 
                style: style_AcostagemSituaoAtual_44,
                popuplayertitle: 'Acostagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_44.png" /> Acostagem - Situação Atual '
            });
var format_ArmazenagemLongoPrazo_45 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_45 = format_ArmazenagemLongoPrazo_45.readFeatures(json_ArmazenagemLongoPrazo_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemLongoPrazo_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_45.addFeatures(features_ArmazenagemLongoPrazo_45);
var lyr_ArmazenagemLongoPrazo_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_45, 
                style: style_ArmazenagemLongoPrazo_45,
                popuplayertitle: 'Armazenagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_45.png" /> Armazenagem - Longo Prazo '
            });
var format_ArmazenagemMdioPrazo_46 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_46 = format_ArmazenagemMdioPrazo_46.readFeatures(json_ArmazenagemMdioPrazo_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemMdioPrazo_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_46.addFeatures(features_ArmazenagemMdioPrazo_46);
var lyr_ArmazenagemMdioPrazo_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_46, 
                style: style_ArmazenagemMdioPrazo_46,
                popuplayertitle: 'Armazenagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_46.png" /> Armazenagem - Médio Prazo '
            });
var format_ArmazenagemCurtoPrazo_47 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_47 = format_ArmazenagemCurtoPrazo_47.readFeatures(json_ArmazenagemCurtoPrazo_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemCurtoPrazo_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_47.addFeatures(features_ArmazenagemCurtoPrazo_47);
var lyr_ArmazenagemCurtoPrazo_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_47, 
                style: style_ArmazenagemCurtoPrazo_47,
                popuplayertitle: 'Armazenagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_47.png" /> Armazenagem - Curto Prazo '
            });
var format_ArmazenagemSituaoAtual_48 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_48 = format_ArmazenagemSituaoAtual_48.readFeatures(json_ArmazenagemSituaoAtual_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemSituaoAtual_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_48.addFeatures(features_ArmazenagemSituaoAtual_48);
var lyr_ArmazenagemSituaoAtual_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_48, 
                style: style_ArmazenagemSituaoAtual_48,
                popuplayertitle: 'Armazenagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_48.png" /> Armazenagem - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53 = format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53.readFeatures(json_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53.addFeatures(features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53);
var lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53, 
                style: style_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasLongoPrazo_53.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54 = format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54.readFeatures(json_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54.addFeatures(features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54);
var lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54, 
                style: style_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasMdioPrazo_54.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55 = format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55.readFeatures(json_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55.addFeatures(features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55);
var lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55, 
                style: style_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56 = format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56.readFeatures(json_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56.addFeatures(features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56);
var lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56, 
                style: style_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasSituaoAtual_56.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual '
            });
var format_CargaGeralApoioOffshore_57 = new ol.format.GeoJSON();
var features_CargaGeralApoioOffshore_57 = format_CargaGeralApoioOffshore_57.readFeatures(json_CargaGeralApoioOffshore_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralApoioOffshore_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralApoioOffshore_57.addFeatures(features_CargaGeralApoioOffshore_57);
var lyr_CargaGeralApoioOffshore_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralApoioOffshore_57, 
                style: style_CargaGeralApoioOffshore_57,
                popuplayertitle: 'Carga Geral/Apoio Offshore',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralApoioOffshore_57.png" /> Carga Geral/Apoio Offshore'
            });
var format_CargaGeralConteinerizada_58 = new ol.format.GeoJSON();
var features_CargaGeralConteinerizada_58 = format_CargaGeralConteinerizada_58.readFeatures(json_CargaGeralConteinerizada_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralConteinerizada_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralConteinerizada_58.addFeatures(features_CargaGeralConteinerizada_58);
var lyr_CargaGeralConteinerizada_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralConteinerizada_58, 
                style: style_CargaGeralConteinerizada_58,
                popuplayertitle: 'Carga Geral/Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralConteinerizada_58.png" /> Carga Geral/Conteinerizada'
            });
var format_Multipropsito_59 = new ol.format.GeoJSON();
var features_Multipropsito_59 = format_Multipropsito_59.readFeatures(json_Multipropsito_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Multipropsito_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_59.addFeatures(features_Multipropsito_59);
var lyr_Multipropsito_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_59, 
                style: style_Multipropsito_59,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_59.png" /> Multipropósito'
            });
var format_GranelLquidoeGasoso_60 = new ol.format.GeoJSON();
var features_GranelLquidoeGasoso_60 = format_GranelLquidoeGasoso_60.readFeatures(json_GranelLquidoeGasoso_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquidoeGasoso_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquidoeGasoso_60.addFeatures(features_GranelLquidoeGasoso_60);
var lyr_GranelLquidoeGasoso_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquidoeGasoso_60, 
                style: style_GranelLquidoeGasoso_60,
                popuplayertitle: 'Granel Líquido e Gasoso',
                interactive: true,
                title: '<img src="styles/legend/GranelLquidoeGasoso_60.png" /> Granel Líquido e Gasoso'
            });
var format_GranelSlido_61 = new ol.format.GeoJSON();
var features_GranelSlido_61 = format_GranelSlido_61.readFeatures(json_GranelSlido_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlido_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_61.addFeatures(features_GranelSlido_61);
var lyr_GranelSlido_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_61, 
                style: style_GranelSlido_61,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_61.png" /> Granel Sólido'
            });
var format_CargaGeralApoioOffshore_62 = new ol.format.GeoJSON();
var features_CargaGeralApoioOffshore_62 = format_CargaGeralApoioOffshore_62.readFeatures(json_CargaGeralApoioOffshore_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralApoioOffshore_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralApoioOffshore_62.addFeatures(features_CargaGeralApoioOffshore_62);
var lyr_CargaGeralApoioOffshore_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralApoioOffshore_62, 
                style: style_CargaGeralApoioOffshore_62,
                popuplayertitle: 'Carga Geral/Apoio Offshore',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralApoioOffshore_62.png" /> Carga Geral/Apoio Offshore'
            });
var format_CargaGeralConteinerizada_63 = new ol.format.GeoJSON();
var features_CargaGeralConteinerizada_63 = format_CargaGeralConteinerizada_63.readFeatures(json_CargaGeralConteinerizada_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralConteinerizada_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralConteinerizada_63.addFeatures(features_CargaGeralConteinerizada_63);
var lyr_CargaGeralConteinerizada_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralConteinerizada_63, 
                style: style_CargaGeralConteinerizada_63,
                popuplayertitle: 'Carga Geral/Conteinerizada ',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralConteinerizada_63.png" /> Carga Geral/Conteinerizada '
            });
var format_Granellquidoegasosoma_64 = new ol.format.GeoJSON();
var features_Granellquidoegasosoma_64 = format_Granellquidoegasosoma_64.readFeatures(json_Granellquidoegasosoma_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Granellquidoegasosoma_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Granellquidoegasosoma_64.addFeatures(features_Granellquidoegasosoma_64);
var lyr_Granellquidoegasosoma_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Granellquidoegasosoma_64, 
                style: style_Granellquidoegasosoma_64,
                popuplayertitle: 'Granel líquido e gasoso ma',
                interactive: true,
                title: '<img src="styles/legend/Granellquidoegasosoma_64.png" /> Granel líquido e gasoso ma'
            });
var format_Multipropsito_65 = new ol.format.GeoJSON();
var features_Multipropsito_65 = format_Multipropsito_65.readFeatures(json_Multipropsito_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Multipropsito_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_65.addFeatures(features_Multipropsito_65);
var lyr_Multipropsito_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_65, 
                style: style_Multipropsito_65,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_65.png" /> Multipropósito'
            });
var format_GranelSlido_66 = new ol.format.GeoJSON();
var features_GranelSlido_66 = format_GranelSlido_66.readFeatures(json_GranelSlido_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlido_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_66.addFeatures(features_GranelSlido_66);
var lyr_GranelSlido_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_66, 
                style: style_GranelSlido_66,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_66.png" /> Granel Sólido'
            });
var format_CargaGeralApoioOffshore_67 = new ol.format.GeoJSON();
var features_CargaGeralApoioOffshore_67 = format_CargaGeralApoioOffshore_67.readFeatures(json_CargaGeralApoioOffshore_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralApoioOffshore_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralApoioOffshore_67.addFeatures(features_CargaGeralApoioOffshore_67);
var lyr_CargaGeralApoioOffshore_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralApoioOffshore_67, 
                style: style_CargaGeralApoioOffshore_67,
                popuplayertitle: 'Carga Geral/Apoio Offshore',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralApoioOffshore_67.png" /> Carga Geral/Apoio Offshore'
            });
var format_CargaGeralConteinerizada_68 = new ol.format.GeoJSON();
var features_CargaGeralConteinerizada_68 = format_CargaGeralConteinerizada_68.readFeatures(json_CargaGeralConteinerizada_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralConteinerizada_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralConteinerizada_68.addFeatures(features_CargaGeralConteinerizada_68);
var lyr_CargaGeralConteinerizada_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralConteinerizada_68, 
                style: style_CargaGeralConteinerizada_68,
                popuplayertitle: 'Carga Geral/Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralConteinerizada_68.png" /> Carga Geral/Conteinerizada'
            });
var format_GranelLquidoGasoso_69 = new ol.format.GeoJSON();
var features_GranelLquidoGasoso_69 = format_GranelLquidoGasoso_69.readFeatures(json_GranelLquidoGasoso_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquidoGasoso_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquidoGasoso_69.addFeatures(features_GranelLquidoGasoso_69);
var lyr_GranelLquidoGasoso_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquidoGasoso_69, 
                style: style_GranelLquidoGasoso_69,
                popuplayertitle: 'Granel Líquido/Gasoso',
                interactive: true,
                title: '<img src="styles/legend/GranelLquidoGasoso_69.png" /> Granel Líquido/Gasoso'
            });
var format_Multipropsito_70 = new ol.format.GeoJSON();
var features_Multipropsito_70 = format_Multipropsito_70.readFeatures(json_Multipropsito_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Multipropsito_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_70.addFeatures(features_Multipropsito_70);
var lyr_Multipropsito_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_70, 
                style: style_Multipropsito_70,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_70.png" /> Multipropósito'
            });
var format_GranelSlido_71 = new ol.format.GeoJSON();
var features_GranelSlido_71 = format_GranelSlido_71.readFeatures(json_GranelSlido_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlido_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_71.addFeatures(features_GranelSlido_71);
var lyr_GranelSlido_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_71, 
                style: style_GranelSlido_71,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_71.png" /> Granel Sólido'
            });
var format_CargaGeralApoioOffshore_72 = new ol.format.GeoJSON();
var features_CargaGeralApoioOffshore_72 = format_CargaGeralApoioOffshore_72.readFeatures(json_CargaGeralApoioOffshore_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralApoioOffshore_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralApoioOffshore_72.addFeatures(features_CargaGeralApoioOffshore_72);
var lyr_CargaGeralApoioOffshore_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralApoioOffshore_72, 
                style: style_CargaGeralApoioOffshore_72,
                popuplayertitle: 'Carga Geral/Apoio Offshore',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralApoioOffshore_72.png" /> Carga Geral/Apoio Offshore'
            });
var format_CargaGeralConteinerizada_73 = new ol.format.GeoJSON();
var features_CargaGeralConteinerizada_73 = format_CargaGeralConteinerizada_73.readFeatures(json_CargaGeralConteinerizada_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralConteinerizada_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralConteinerizada_73.addFeatures(features_CargaGeralConteinerizada_73);
var lyr_CargaGeralConteinerizada_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralConteinerizada_73, 
                style: style_CargaGeralConteinerizada_73,
                popuplayertitle: 'Carga Geral/Conteinerizada ',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralConteinerizada_73.png" /> Carga Geral/Conteinerizada '
            });
var format_GranelLquidoGasoso_74 = new ol.format.GeoJSON();
var features_GranelLquidoGasoso_74 = format_GranelLquidoGasoso_74.readFeatures(json_GranelLquidoGasoso_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquidoGasoso_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquidoGasoso_74.addFeatures(features_GranelLquidoGasoso_74);
var lyr_GranelLquidoGasoso_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquidoGasoso_74, 
                style: style_GranelLquidoGasoso_74,
                popuplayertitle: 'Granel Líquido/Gasoso',
                interactive: true,
                title: '<img src="styles/legend/GranelLquidoGasoso_74.png" /> Granel Líquido/Gasoso'
            });
var format_Multipropsito_75 = new ol.format.GeoJSON();
var features_Multipropsito_75 = format_Multipropsito_75.readFeatures(json_Multipropsito_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Multipropsito_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_75.addFeatures(features_Multipropsito_75);
var lyr_Multipropsito_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_75, 
                style: style_Multipropsito_75,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_75.png" /> Multipropósito'
            });
var format_GranelSlido_76 = new ol.format.GeoJSON();
var features_GranelSlido_76 = format_GranelSlido_76.readFeatures(json_GranelSlido_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlido_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_76.addFeatures(features_GranelSlido_76);
var lyr_GranelSlido_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_76, 
                style: style_GranelSlido_76,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_76.png" /> Granel Sólido'
            });
var format_reasAfetassOperaesPorturiasLongoPrazo_77 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasLongoPrazo_77 = format_reasAfetassOperaesPorturiasLongoPrazo_77.readFeatures(json_reasAfetassOperaesPorturiasLongoPrazo_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasLongoPrazo_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasLongoPrazo_77.addFeatures(features_reasAfetassOperaesPorturiasLongoPrazo_77);
var lyr_reasAfetassOperaesPorturiasLongoPrazo_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasLongoPrazo_77, 
                style: style_reasAfetassOperaesPorturiasLongoPrazo_77,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasLongoPrazo_77.png" /> Áreas Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasMdioPrazo_78 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasMdioPrazo_78 = format_reasAfetassOperaesPorturiasMdioPrazo_78.readFeatures(json_reasAfetassOperaesPorturiasMdioPrazo_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasMdioPrazo_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasMdioPrazo_78.addFeatures(features_reasAfetassOperaesPorturiasMdioPrazo_78);
var lyr_reasAfetassOperaesPorturiasMdioPrazo_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasMdioPrazo_78, 
                style: style_reasAfetassOperaesPorturiasMdioPrazo_78,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasMdioPrazo_78.png" /> Áreas Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasCurtoPrazo_79 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasCurtoPrazo_79 = format_reasAfetassOperaesPorturiasCurtoPrazo_79.readFeatures(json_reasAfetassOperaesPorturiasCurtoPrazo_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_79.addFeatures(features_reasAfetassOperaesPorturiasCurtoPrazo_79);
var lyr_reasAfetassOperaesPorturiasCurtoPrazo_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_79, 
                style: style_reasAfetassOperaesPorturiasCurtoPrazo_79,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasCurtoPrazo_79.png" /> Áreas Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasSituaoAtual_80 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasSituaoAtual_80 = format_reasAfetassOperaesPorturiasSituaoAtual_80.readFeatures(json_reasAfetassOperaesPorturiasSituaoAtual_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasSituaoAtual_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasSituaoAtual_80.addFeatures(features_reasAfetassOperaesPorturiasSituaoAtual_80);
var lyr_reasAfetassOperaesPorturiasSituaoAtual_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasSituaoAtual_80, 
                style: style_reasAfetassOperaesPorturiasSituaoAtual_80,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasSituaoAtual_80.png" /> Áreas Afetas às Operações Portuárias - Situação Atual '
            });
var format_PoligonaldareadoPortoOrganizadodeVitria_81 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodeVitria_81 = format_PoligonaldareadoPortoOrganizadodeVitria_81.readFeatures(json_PoligonaldareadoPortoOrganizadodeVitria_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PoligonaldareadoPortoOrganizadodeVitria_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodeVitria_81.addFeatures(features_PoligonaldareadoPortoOrganizadodeVitria_81);
var lyr_PoligonaldareadoPortoOrganizadodeVitria_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodeVitria_81, 
                style: style_PoligonaldareadoPortoOrganizadodeVitria_81,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Vitória',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodeVitria_81.png" /> Poligonal da Área do Porto Organizado de Vitória'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodeVitria_81,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado'});
var group_reasAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasLongoPrazo_77,lyr_reasAfetassOperaesPorturiasMdioPrazo_78,lyr_reasAfetassOperaesPorturiasCurtoPrazo_79,lyr_reasAfetassOperaesPorturiasSituaoAtual_80,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual = new ol.layer.Group({
                                layers: [lyr_CargaGeralApoioOffshore_72,lyr_CargaGeralConteinerizada_73,lyr_GranelLquidoGasoso_74,lyr_Multipropsito_75,lyr_GranelSlido_76,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Situação Atual '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo = new ol.layer.Group({
                                layers: [lyr_CargaGeralApoioOffshore_67,lyr_CargaGeralConteinerizada_68,lyr_GranelLquidoGasoso_69,lyr_Multipropsito_70,lyr_GranelSlido_71,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Curto Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo = new ol.layer.Group({
                                layers: [lyr_CargaGeralApoioOffshore_62,lyr_CargaGeralConteinerizada_63,lyr_Granellquidoegasosoma_64,lyr_Multipropsito_65,lyr_GranelSlido_66,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Médio Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo = new ol.layer.Group({
                                layers: [lyr_CargaGeralApoioOffshore_57,lyr_CargaGeralConteinerizada_58,lyr_Multipropsito_59,lyr_GranelLquidoeGasoso_60,lyr_GranelSlido_61,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Longo Prazo'});
var group_reasAfetassOperaesPorturiasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53,lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54,lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55,lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Arrendadas '});
var group_reasAfetassOperaesPorturiasDisponveisparaArrendamento = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento '});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_45,lyr_ArmazenagemMdioPrazo_46,lyr_ArmazenagemCurtoPrazo_47,lyr_ArmazenagemSituaoAtual_48,],
                                fold: 'open',
                                title: 'Armazenagem '});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_41,lyr_AcostagemMdioPrazo_42,lyr_AcostagemCurtoPrazo_43,lyr_AcostagemSituaoAtual_44,],
                                fold: 'open',
                                title: 'Acostagem '});
var group_reasNoAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasLongoPrazo_37,lyr_reasNoAfetassOperaesPorturiasMdioPrazo_38,lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_39,lyr_reasNoAfetassOperaesPorturiasSituaoAtual_40,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias '});
var group_reasNoAfetassOperaesPorturiasemExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_33,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_34,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_35,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta '});
var group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_29,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_30,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_31,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_32,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta '});
var group_reaseInstalaesAlfandegadas = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadas_28,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas '});
var group_TerminaldeUsoPrivado = new ol.layer.Group({
                                layers: [lyr_TerminaldeUsoPrivado_27,],
                                fold: 'open',
                                title: 'Terminal de Uso Privado '});
var group_AcessosRodoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosExternos_26,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Externos '});
var group_AcessosRodoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosInternosLongoPrazo_22,lyr_AcessosRodoviriosInternosMdioPrazo_23,lyr_AcessosRodoviriosInternosCurtoPrazo_24,lyr_AcessosRodoviriosInternosSituaoAtual_25,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Internos '});
var group_AcessosFerroviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviriosExternos_21,],
                                fold: 'open',
                                title: 'Acessos Ferroviários Externos '});
var group_AcessosFerroviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviriosInternosLongoPrazo_17,lyr_AcessosFerroviriosInternosMdioPrazo_18,lyr_AcessosFerroviriosInternosCurtoPrazo_19,lyr_AcessosFerroviriosInternosSituaoAtual_20,],
                                fold: 'open',
                                title: 'Acessos Ferroviários Internos '});
var group_AcessosDutoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosDutoviriosExternos_16,],
                                fold: 'open',
                                title: 'Acessos Dutoviários Externos '});
var group_CanaisdeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaisdeAcessoLongoPrazo_12,lyr_CanaisdeAcessoMdioPrazo_13,lyr_CanaisdeAcessoCurtoPrazo_14,lyr_CanaisdeAcessoSituaoAtual_15,],
                                fold: 'open',
                                title: 'Canais de Acesso '});
var group_BaciasdeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciasdeEvoluoLongoPrazo_8,lyr_BaciasdeEvoluoMdioPrazo_9,lyr_BaciasdeEvoluoCurtoPrazo_10,lyr_BaciasdeEvoluoSituaoAtual_11,],
                                fold: 'open',
                                title: 'Bacias de Evolução '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadourosLongoPrazo_4,lyr_FundeadourosMdioPrazo_5,lyr_FundeadourosCurtoPrazo_6,lyr_FundeadourosSituaoAtual_7,],
                                fold: 'open',
                                title: 'Fundeadouros '});
var group_reasUrbanaseRurais = new ol.layer.Group({
                                layers: [lyr_reasUrbanaseRurais_3,],
                                fold: 'open',
                                title: 'Áreas Urbanas e Rurais '});
var group_UnidadesdeConservao = new ol.layer.Group({
                                layers: [lyr_UnidadesdeConservao_2,],
                                fold: 'open',
                                title: 'Unidades de Conservação '});
var group_ImveisTombados = new ol.layer.Group({
                                layers: [lyr_ImveisTombados_1,],
                                fold: 'open',
                                title: 'Imóveis Tombados '});

lyr_GoogleSatellite_0.setVisible(true);lyr_ImveisTombados_1.setVisible(false);lyr_UnidadesdeConservao_2.setVisible(false);lyr_reasUrbanaseRurais_3.setVisible(false);lyr_FundeadourosLongoPrazo_4.setVisible(false);lyr_FundeadourosMdioPrazo_5.setVisible(false);lyr_FundeadourosCurtoPrazo_6.setVisible(false);lyr_FundeadourosSituaoAtual_7.setVisible(false);lyr_BaciasdeEvoluoLongoPrazo_8.setVisible(false);lyr_BaciasdeEvoluoMdioPrazo_9.setVisible(false);lyr_BaciasdeEvoluoCurtoPrazo_10.setVisible(false);lyr_BaciasdeEvoluoSituaoAtual_11.setVisible(false);lyr_CanaisdeAcessoLongoPrazo_12.setVisible(false);lyr_CanaisdeAcessoMdioPrazo_13.setVisible(false);lyr_CanaisdeAcessoCurtoPrazo_14.setVisible(false);lyr_CanaisdeAcessoSituaoAtual_15.setVisible(false);lyr_AcessosDutoviriosExternos_16.setVisible(false);lyr_AcessosFerroviriosInternosLongoPrazo_17.setVisible(false);lyr_AcessosFerroviriosInternosMdioPrazo_18.setVisible(false);lyr_AcessosFerroviriosInternosCurtoPrazo_19.setVisible(false);lyr_AcessosFerroviriosInternosSituaoAtual_20.setVisible(false);lyr_AcessosFerroviriosExternos_21.setVisible(false);lyr_AcessosRodoviriosInternosLongoPrazo_22.setVisible(false);lyr_AcessosRodoviriosInternosMdioPrazo_23.setVisible(false);lyr_AcessosRodoviriosInternosCurtoPrazo_24.setVisible(false);lyr_AcessosRodoviriosInternosSituaoAtual_25.setVisible(false);lyr_AcessosRodoviriosExternos_26.setVisible(false);lyr_TerminaldeUsoPrivado_27.setVisible(false);lyr_reaseInstalaesAlfandegadas_28.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_29.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_30.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_31.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_32.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_33.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_34.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_35.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36.setVisible(false);lyr_reasNoAfetassOperaesPorturiasLongoPrazo_37.setVisible(false);lyr_reasNoAfetassOperaesPorturiasMdioPrazo_38.setVisible(false);lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_39.setVisible(false);lyr_reasNoAfetassOperaesPorturiasSituaoAtual_40.setVisible(false);lyr_AcostagemLongoPrazo_41.setVisible(false);lyr_AcostagemMdioPrazo_42.setVisible(false);lyr_AcostagemCurtoPrazo_43.setVisible(false);lyr_AcostagemSituaoAtual_44.setVisible(false);lyr_ArmazenagemLongoPrazo_45.setVisible(false);lyr_ArmazenagemMdioPrazo_46.setVisible(false);lyr_ArmazenagemCurtoPrazo_47.setVisible(false);lyr_ArmazenagemSituaoAtual_48.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56.setVisible(false);lyr_CargaGeralApoioOffshore_57.setVisible(false);lyr_CargaGeralConteinerizada_58.setVisible(false);lyr_Multipropsito_59.setVisible(false);lyr_GranelLquidoeGasoso_60.setVisible(false);lyr_GranelSlido_61.setVisible(false);lyr_CargaGeralApoioOffshore_62.setVisible(false);lyr_CargaGeralConteinerizada_63.setVisible(false);lyr_Granellquidoegasosoma_64.setVisible(false);lyr_Multipropsito_65.setVisible(false);lyr_GranelSlido_66.setVisible(false);lyr_CargaGeralApoioOffshore_67.setVisible(false);lyr_CargaGeralConteinerizada_68.setVisible(false);lyr_GranelLquidoGasoso_69.setVisible(false);lyr_Multipropsito_70.setVisible(false);lyr_GranelSlido_71.setVisible(false);lyr_CargaGeralApoioOffshore_72.setVisible(false);lyr_CargaGeralConteinerizada_73.setVisible(false);lyr_GranelLquidoGasoso_74.setVisible(false);lyr_Multipropsito_75.setVisible(false);lyr_GranelSlido_76.setVisible(false);lyr_reasAfetassOperaesPorturiasLongoPrazo_77.setVisible(false);lyr_reasAfetassOperaesPorturiasMdioPrazo_78.setVisible(false);lyr_reasAfetassOperaesPorturiasCurtoPrazo_79.setVisible(false);lyr_reasAfetassOperaesPorturiasSituaoAtual_80.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodeVitria_81.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_ImveisTombados,group_UnidadesdeConservao,group_reasUrbanaseRurais,group_Fundeadouros,group_BaciasdeEvoluo,group_CanaisdeAcesso,group_AcessosDutoviriosExternos,group_AcessosFerroviriosInternos,group_AcessosFerroviriosExternos,group_AcessosRodoviriosInternos,group_AcessosRodoviriosExternos,group_TerminaldeUsoPrivado,group_reaseInstalaesAlfandegadas,group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta,group_reasNoAfetassOperaesPorturiasemExploraoIndireta,group_reasNoAfetassOperaesPorturias,group_Acostagem,group_Armazenagem,group_reasAfetassOperaesPorturiasDisponveisparaArrendamento,group_reasAfetassOperaesPorturiasArrendadas,group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual,group_reasAfetassOperaesPorturias,group_PoligonaldareadoPortoOrganizado];
lyr_ImveisTombados_1.set('fieldAliases', {'Nome': 'Nome', 'Inst_Legal': 'Instrumento Legal ', 'Área': 'Área (m²) ', });
lyr_UnidadesdeConservao_2.set('fieldAliases', {'Nome': 'Nome', 'Inst_Legal': 'Instrumento Legal ', 'Area': 'Área (m²) ', 'Fonte': 'Fonte', });
lyr_reasUrbanaseRurais_3.set('fieldAliases', {'Tipo': 'Tipo de Área ', 'Inst_Legal': 'Instrumento Legal ', 'Area': 'Área (m²) ', });
lyr_FundeadourosLongoPrazo_4.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosMdioPrazo_5.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosCurtoPrazo_6.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosSituaoAtual_7.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoLongoPrazo_8.set('fieldAliases', {'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoMdioPrazo_9.set('fieldAliases', {'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoCurtoPrazo_10.set('fieldAliases', {'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoSituaoAtual_11.set('fieldAliases', {'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoLongoPrazo_12.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoMdioPrazo_13.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoCurtoPrazo_14.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoSituaoAtual_15.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_AcessosDutoviriosExternos_16.set('fieldAliases', {'Nome': 'Nome', 'Mat_Trans': 'Material Transportado ', 'Posicao': 'Posição ', 'Operador': 'Operador', 'T_Dut': 'Tipo de Duto ', });
lyr_AcessosFerroviriosInternosLongoPrazo_17.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosInternosMdioPrazo_18.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosInternosCurtoPrazo_19.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosInternosSituaoAtual_20.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosExternos_21.set('fieldAliases', {'Linha': 'Linha', 'Operador': 'Operador', 'Trecho': 'Trecho', 'Descricao': 'Descrição ', });
lyr_AcessosRodoviriosInternosLongoPrazo_22.set('fieldAliases', {'Ident': 'Identificação ', 'N_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosMdioPrazo_23.set('fieldAliases', {'Ident': 'Identificação ', 'N_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosCurtoPrazo_24.set('fieldAliases', {'Ident': 'Identificação ', 'N_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosSituaoAtual_25.set('fieldAliases', {'Ident': 'Identificação ', 'N_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosExternos_26.set('fieldAliases', {'Nome': 'Nome', 'Sigla': 'Sigla', 'Jurisdicao': 'Jurisdição ', });
lyr_TerminaldeUsoPrivado_27.set('fieldAliases', {'Nome': 'Nome', 'T_Produto': 'Tipo de Produto ', 'Companhia': 'Companhia', 'Area': 'Área (m²) ', });
lyr_reaseInstalaesAlfandegadas_28.set('fieldAliases', {'Ins_Legal': 'Instrumento Legal ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_29.set('fieldAliases', {'Nome': 'Nome', 'T_Explo': 'Tipo de Exploração ', 'Área': 'Área (m²) ', 'Util_Área': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_30.set('fieldAliases', {'Nome': 'Nome', 'T_Explo': 'Tipo de Exploração ', 'Área': 'Área (m²) ', 'Util_Área': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_31.set('fieldAliases', {'Nome': 'Nome', 'T_Explo': 'Tipo de Exploração ', 'Área': 'Área (m²) ', 'Util_Área': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_32.set('fieldAliases', {'Nome': 'Nome', 'T_Explo': 'Tipo de Exploração ', 'Área': 'Área (m²) ', 'Util_Área': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_33.set('fieldAliases', {'Nome': 'Nome', 'T_Cessão': 'Tipo de Cessão ', 'Respons': 'Responsável ', 'Área': 'Área (m²) ', 'D_Inicio': 'Data de Início do Contrato ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_34.set('fieldAliases', {'Nome': 'Nome', 'T_Cessão': 'Tipo de Cessão ', 'Respons': 'Responsável ', 'Área': 'Área (m²) ', 'D_Inicio': 'Data de Início do Contrato ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_35.set('fieldAliases', {'Nome': 'Nome', 'T_Cessão': 'Tipo de Cessão ', 'Respons': 'Responsável ', 'Área': 'Área (m²) ', 'D_Inicio': 'Data de Início do Contrato ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36.set('fieldAliases', {'Nome': 'Nome', 'T_Cessão': 'Tipo de Cessão ', 'Respons': 'Responsável ', 'Área': 'Área (m²) ', 'D_Inicio': 'Data de Início do Contrato ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_37.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Área': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_38.set('fieldAliases', {'Destinacao': 'Destinação ', 'Área': 'Área (m²) ', 'Nome': 'Nome', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_39.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Área': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_40.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Área': 'Área (m²) ', });
lyr_AcostagemLongoPrazo_41.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per_Carga': 'Perfil de Carga ', });
lyr_AcostagemMdioPrazo_42.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per_Carga': 'Perfil de Carga ', });
lyr_AcostagemCurtoPrazo_43.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per_Carga': 'Perfil de Carga ', });
lyr_AcostagemSituaoAtual_44.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per_Carga': 'Perfil de Carga ', });
lyr_ArmazenagemLongoPrazo_45.set('fieldAliases', {'Nome': 'Nome', 'T_Instal': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', 'Área': 'Área', });
lyr_ArmazenagemMdioPrazo_46.set('fieldAliases', {'Nome': 'Nome', 'T_Instal': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', 'Área': 'Área', });
lyr_ArmazenagemCurtoPrazo_47.set('fieldAliases', {'Nome': 'Nome', 'T_Instal': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', 'Área': 'Área', });
lyr_ArmazenagemSituaoAtual_48.set('fieldAliases', {'Nome': 'Nome', 'T_Instal': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', 'Área': 'Área', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'Area': 'Área (m²)', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'Area': 'Área (m²)', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53.set('fieldAliases', {'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'Perfil': 'Perfil de Carga ', 'Area': 'Área (m²) ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54.set('fieldAliases', {'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'Perfil': 'Perfil de Carga ', 'Area': 'Área (m²) ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55.set('fieldAliases', {'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'Perfil': 'Perfil de Carga ', 'Area': 'Área (m²) ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56.set('fieldAliases', {'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'Perfil': 'Perfil de Carga ', 'Area': 'Área (m²) ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', });
lyr_CargaGeralApoioOffshore_57.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_CargaGeralConteinerizada_58.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_Multipropsito_59.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_GranelLquidoeGasoso_60.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_GranelSlido_61.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_CargaGeralApoioOffshore_62.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_CargaGeralConteinerizada_63.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_Granellquidoegasosoma_64.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_Multipropsito_65.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_GranelSlido_66.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_CargaGeralApoioOffshore_67.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_CargaGeralConteinerizada_68.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelLquidoGasoso_69.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Multipropsito_70.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelSlido_71.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_CargaGeralApoioOffshore_72.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_CargaGeralConteinerizada_73.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelLquidoGasoso_74.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Multipropsito_75.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelSlido_76.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_77.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', 'Area': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_78.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', 'Area': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_79.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', 'Area': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_80.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_PoligonaldareadoPortoOrganizadodeVitria_81.set('fieldAliases', {'Ins_Legal': 'Instrumento Legal ', 'Anexo': 'Anexo', });
lyr_ImveisTombados_1.set('fieldImages', {'Nome': 'TextEdit', 'Inst_Legal': 'TextEdit', 'Área': 'TextEdit', });
lyr_UnidadesdeConservao_2.set('fieldImages', {'Nome': 'TextEdit', 'Inst_Legal': 'TextEdit', 'Area': 'TextEdit', 'Fonte': '', });
lyr_reasUrbanaseRurais_3.set('fieldImages', {'Tipo': 'TextEdit', 'Inst_Legal': 'TextEdit', 'Area': 'TextEdit', });
lyr_FundeadourosLongoPrazo_4.set('fieldImages', {'N_Ident': 'TextEdit', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosMdioPrazo_5.set('fieldImages', {'N_Ident': 'TextEdit', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosCurtoPrazo_6.set('fieldImages', {'N_Ident': 'TextEdit', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosSituaoAtual_7.set('fieldImages', {'N_Ident': 'TextEdit', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoLongoPrazo_8.set('fieldImages', {'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoMdioPrazo_9.set('fieldImages', {'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoCurtoPrazo_10.set('fieldImages', {'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoSituaoAtual_11.set('fieldImages', {'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoLongoPrazo_12.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoMdioPrazo_13.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoCurtoPrazo_14.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoSituaoAtual_15.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_AcessosDutoviriosExternos_16.set('fieldImages', {'Nome': 'TextEdit', 'Mat_Trans': 'TextEdit', 'Posicao': 'TextEdit', 'Operador': 'TextEdit', 'T_Dut': 'TextEdit', });
lyr_AcessosFerroviriosInternosLongoPrazo_17.set('fieldImages', {'Nome': 'TextEdit', 'Operador': 'TextEdit', });
lyr_AcessosFerroviriosInternosMdioPrazo_18.set('fieldImages', {'Nome': 'TextEdit', 'Operador': 'TextEdit', });
lyr_AcessosFerroviriosInternosCurtoPrazo_19.set('fieldImages', {'Nome': 'TextEdit', 'Operador': 'TextEdit', });
lyr_AcessosFerroviriosInternosSituaoAtual_20.set('fieldImages', {'Nome': 'TextEdit', 'Operador': 'TextEdit', });
lyr_AcessosFerroviriosExternos_21.set('fieldImages', {'Linha': 'TextEdit', 'Operador': 'TextEdit', 'Trecho': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_AcessosRodoviriosInternosLongoPrazo_22.set('fieldImages', {'Ident': 'TextEdit', 'N_Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosMdioPrazo_23.set('fieldImages', {'Ident': 'TextEdit', 'N_Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosCurtoPrazo_24.set('fieldImages', {'Ident': 'TextEdit', 'N_Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosSituaoAtual_25.set('fieldImages', {'Ident': 'TextEdit', 'N_Pistas': 'TextEdit', });
lyr_AcessosRodoviriosExternos_26.set('fieldImages', {'Nome': 'TextEdit', 'Sigla': 'TextEdit', 'Jurisdicao': 'TextEdit', });
lyr_TerminaldeUsoPrivado_27.set('fieldImages', {'Nome': 'TextEdit', 'T_Produto': 'TextEdit', 'Companhia': 'TextEdit', 'Area': 'TextEdit', });
lyr_reaseInstalaesAlfandegadas_28.set('fieldImages', {'Ins_Legal': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_29.set('fieldImages', {'Nome': 'TextEdit', 'T_Explo': 'TextEdit', 'Área': 'TextEdit', 'Util_Área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_30.set('fieldImages', {'Nome': 'TextEdit', 'T_Explo': 'TextEdit', 'Área': 'TextEdit', 'Util_Área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_31.set('fieldImages', {'Nome': 'TextEdit', 'T_Explo': 'TextEdit', 'Área': 'TextEdit', 'Util_Área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_32.set('fieldImages', {'Nome': 'TextEdit', 'T_Explo': 'TextEdit', 'Área': 'TextEdit', 'Util_Área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_33.set('fieldImages', {'Nome': 'TextEdit', 'T_Cessão': 'TextEdit', 'Respons': 'TextEdit', 'Área': 'TextEdit', 'D_Inicio': 'TextEdit', 'D_Term': 'TextEdit', 'A_Desenv': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_34.set('fieldImages', {'Nome': 'TextEdit', 'T_Cessão': 'TextEdit', 'Respons': 'TextEdit', 'Área': 'TextEdit', 'D_Inicio': 'TextEdit', 'D_Term': 'TextEdit', 'A_Desenv': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_35.set('fieldImages', {'Nome': 'TextEdit', 'T_Cessão': 'TextEdit', 'Respons': 'TextEdit', 'Área': 'TextEdit', 'D_Inicio': 'TextEdit', 'D_Term': 'TextEdit', 'A_Desenv': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36.set('fieldImages', {'Nome': 'TextEdit', 'T_Cessão': 'TextEdit', 'Respons': 'TextEdit', 'Área': 'TextEdit', 'D_Inicio': 'TextEdit', 'D_Term': 'TextEdit', 'A_Desenv': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_37.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_38.set('fieldImages', {'Destinacao': 'TextEdit', 'Área': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_39.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_40.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Área': 'TextEdit', });
lyr_AcostagemLongoPrazo_41.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Per_Carga': 'TextEdit', });
lyr_AcostagemMdioPrazo_42.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Per_Carga': 'TextEdit', });
lyr_AcostagemCurtoPrazo_43.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Per_Carga': 'TextEdit', });
lyr_AcostagemSituaoAtual_44.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Per_Carga': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_45.set('fieldImages', {'Nome': 'TextEdit', 'T_Instal': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', 'Área': '', });
lyr_ArmazenagemMdioPrazo_46.set('fieldImages', {'Nome': 'TextEdit', 'T_Instal': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', 'Área': '', });
lyr_ArmazenagemCurtoPrazo_47.set('fieldImages', {'Nome': 'TextEdit', 'T_Instal': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', 'Área': '', });
lyr_ArmazenagemSituaoAtual_48.set('fieldImages', {'Nome': 'TextEdit', 'T_Instal': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', 'Área': '', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53.set('fieldImages', {'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'Perfil': 'TextEdit', 'Area': 'TextEdit', 'D_Inicio': 'TextEdit', 'D_Term': 'TextEdit', 'P_Prorrog': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54.set('fieldImages', {'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'Perfil': 'TextEdit', 'Area': 'TextEdit', 'D_Inicio': 'TextEdit', 'D_Term': 'TextEdit', 'P_Prorrog': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55.set('fieldImages', {'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'Perfil': 'TextEdit', 'Area': 'TextEdit', 'D_Inicio': 'TextEdit', 'D_Term': 'TextEdit', 'P_Prorrog': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56.set('fieldImages', {'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'Perfil': 'TextEdit', 'Area': 'TextEdit', 'D_Inicio': 'TextEdit', 'D_Term': 'TextEdit', 'P_Prorrog': 'TextEdit', });
lyr_CargaGeralApoioOffshore_57.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_CargaGeralConteinerizada_58.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_Multipropsito_59.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelLquidoeGasoso_60.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlido_61.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_CargaGeralApoioOffshore_62.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_CargaGeralConteinerizada_63.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_Granellquidoegasosoma_64.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_Multipropsito_65.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlido_66.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_CargaGeralApoioOffshore_67.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_CargaGeralConteinerizada_68.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelLquidoGasoso_69.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Multipropsito_70.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelSlido_71.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_CargaGeralApoioOffshore_72.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_CargaGeralConteinerizada_73.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelLquidoGasoso_74.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Multipropsito_75.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelSlido_76.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_77.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_78.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_79.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_80.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodeVitria_81.set('fieldImages', {'Ins_Legal': 'TextEdit', 'Anexo': 'TextEdit', });
lyr_ImveisTombados_1.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Inst_Legal': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_UnidadesdeConservao_2.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Inst_Legal': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Fonte': 'inline label - visible with data', });
lyr_reasUrbanaseRurais_3.set('fieldLabels', {'Tipo': 'inline label - visible with data', 'Inst_Legal': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_FundeadourosLongoPrazo_4.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosMdioPrazo_5.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosCurtoPrazo_6.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosSituaoAtual_7.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoLongoPrazo_8.set('fieldLabels', {'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoMdioPrazo_9.set('fieldLabels', {'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoCurtoPrazo_10.set('fieldLabels', {'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoSituaoAtual_11.set('fieldLabels', {'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoLongoPrazo_12.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoMdioPrazo_13.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoCurtoPrazo_14.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoSituaoAtual_15.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_AcessosDutoviriosExternos_16.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Mat_Trans': 'inline label - visible with data', 'Posicao': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'T_Dut': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosLongoPrazo_17.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosMdioPrazo_18.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosCurtoPrazo_19.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosSituaoAtual_20.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosExternos_21.set('fieldLabels', {'Linha': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Trecho': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosLongoPrazo_22.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosMdioPrazo_23.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosCurtoPrazo_24.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosSituaoAtual_25.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosExternos_26.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'Jurisdicao': 'inline label - visible with data', });
lyr_TerminaldeUsoPrivado_27.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Produto': 'inline label - visible with data', 'Companhia': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadas_28.set('fieldLabels', {'Ins_Legal': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_29.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Util_Área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_30.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Util_Área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_31.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Util_Área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_32.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Util_Área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_33.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Cessão': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_34.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Cessão': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_35.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Cessão': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Cessão': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_37.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_38.set('fieldLabels', {'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_39.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_40.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_41.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per_Carga': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_42.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per_Carga': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_43.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per_Carga': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_44.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per_Carga': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_45.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_46.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_47.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_48.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', });
lyr_CargaGeralApoioOffshore_57.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_CargaGeralConteinerizada_58.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_Multipropsito_59.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelLquidoeGasoso_60.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlido_61.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_CargaGeralApoioOffshore_62.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_CargaGeralConteinerizada_63.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_Granellquidoegasosoma_64.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_Multipropsito_65.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlido_66.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_CargaGeralApoioOffshore_67.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_CargaGeralConteinerizada_68.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelLquidoGasoso_69.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Multipropsito_70.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelSlido_71.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_CargaGeralApoioOffshore_72.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_CargaGeralConteinerizada_73.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelLquidoGasoso_74.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Multipropsito_75.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelSlido_76.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_77.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_78.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_79.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_80.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeVitria_81.set('fieldLabels', {'Ins_Legal': 'inline label - visible with data', 'Anexo': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeVitria_81.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});