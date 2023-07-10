(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"backgroundColor":["#FFFFFF"],"id":"rootPlayer","start":"this.init()","minHeight":0,"data":{"defaultLocale":"en","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnTooltip":false,"rate":1,"speechOnInfoWindow":false,"volume":1,"stopBackgroundAudio":false,"pitch":1,"speechOnQuizQuestion":false},"name":"Player698","history":{}},"class":"Player","minWidth":0,"defaultMenu":["fullscreen","mute","rotation"],"scrollBarColor":"#000000","scrollBarMargin":2,"hash": "34a55308197057aa00914149cd25d02e31209ef6e86e0877e08cd9b7ab68a283", "definitions": [{"id":"mainPlayList","class":"PlayList","items":[{"class":"Model3DPlayListItem","player":"this.MainViewerModel3DPlayer","end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","media":"this.model_324C281F_3E5C_FA40_41C9_50217CA98E60"}]},{"id":"MainViewerModel3DPlayer","class":"Model3DPlayer","viewerArea":"this.MainViewer"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60","label":trans('model_324C281F_3E5C_FA40_41C9_50217CA98E60.label'),"backgroundColor":"#333333","environmentURL":"media/model_324C281F_3E5C_FA40_41C9_50217CA98E60/bg_2DFC8C3C_3E5F_5A41_41C9_78E94BF37817.jpg","thumbnailUrl":"media/model_324C281F_3E5C_FA40_41C9_50217CA98E60_t.jpg","lights":["this.light_2DF05C3B_3E5F_5A47_41A8_6F4310EF02E1"],"surfaceReticleMinRadius":15,"objects":["this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_0","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_1","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_2","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_3","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_4","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_5","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_6","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_7","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_8","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_9","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_10","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_11","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_12","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_13","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_14","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_15","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_16","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_17","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_18","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_19","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_20","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_21","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_22","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_23","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_24","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_25","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_26","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_27","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_28","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_29","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_30","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_31","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_32","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_33","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_34","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_35","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_36","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_37","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_38","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_39","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_40","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_41","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_42","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_43","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_44","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_45","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_46","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_47","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_48","this.model_324C281F_3E5C_FA40_41C9_50217CA98E60_49"],"floorRadius":49.82,"surfaceSelectionCoef":2,"model":"this.res_2DC89C39_3E5F_5A43_41A2_0B9333FB0380","environmentIntensity":0.5,"data":{"showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true,"label":"Samsung Model Web M1 Centered"},"surfaceReticleMaxRadius":50,"class":"Model3D","camera":"this.cam_2DF4AC3A_3E5F_5A41_41B9_19D0BDA43E87","surfaceReticleRadius":0.02},{"progressBorderColor":"#000000","id":"MainViewer","minHeight":50,"playbackBarProgressBackgroundColorRatios":[0],"minWidth":100,"progressBackgroundColor":["#000000"],"progressBottom":10,"subtitlesTextShadowOpacity":1,"playbackBarBorderColor":"#FFFFFF","progressHeight":2,"progressBorderSize":0,"progressBarBorderSize":0,"subtitlesTextShadowColor":"#000000","toolTipPaddingTop":4,"subtitlesTop":0,"playbackBarBorderRadius":0,"progressBarBorderRadius":2,"playbackBarProgressBorderColor":"#000000","subtitlesTextShadowHorizontalLength":1,"subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"progressBorderRadius":2,"progressLeft":"33%","playbackBarHeadBorderRadius":0,"surfaceReticleColor":"#FFFFFF","data":{"name":"Main Viewer"},"playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"toolTipPaddingLeft":6,"playbackBarHeadBorderColor":"#000000","playbackBarHeadHeight":15,"width":"100%","firstTransitionDuration":0,"subtitlesFontColor":"#FFFFFF","playbackBarBorderSize":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipBackgroundColor":"#F6F6F6","surfaceReticleSelectionColor":"#FFFFFF","height":"100%","subtitlesFontFamily":"Arial","toolTipFontSize":"1.11vmin","playbackBarHeadShadow":true,"vrPointerSelectionColor":"#FF6600","progressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipPaddingBottom":4,"toolTipFontColor":"#606060","vrPointerSelectionTime":2000,"toolTipTextShadowColor":"#000000","toolTipFontFamily":"Arial","playbackBarBottom":5,"progressRight":"33%","playbackBarBackgroundColor":["#FFFFFF"],"progressOpacity":0.7,"toolTipShadowColor":"#333138","subtitlesTextShadowVerticalLength":1,"vrPointerColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"progressBarBackgroundColorDirection":"horizontal","propagateClick":false,"progressBarBorderColor":"#000000","playbackBarHeight":10,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"playbackBarProgressBorderSize":0,"playbackBarRight":0,"subtitlesGap":0,"playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesBackgroundColor":"#000000","playbackBarHeadShadowOpacity":0.7,"subtitlesBottom":50,"toolTipBorderColor":"#767676","toolTipPaddingRight":6,"progressBarBackgroundColor":["#3399FF"],"class":"ViewerArea"},{"id":"light_2DF05C3B_3E5F_5A47_41A8_6F4310EF02E1","class":"AmbientLight","intensity":0.5},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_0","data":{"label":"Cube.065"},"objectId":"0","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_1","data":{"label":"Cube.066"},"objectId":"1","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_2","data":{"label":"Cube.067"},"objectId":"2","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_3","data":{"label":"Cube.068"},"objectId":"3","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_4","data":{"label":"Cube.069"},"objectId":"4","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_5","data":{"label":"Cube.070"},"objectId":"5","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_6","data":{"label":"Cube.071"},"objectId":"6","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_7","data":{"label":"Cube.072"},"objectId":"7","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_8","data":{"label":"Cube.074"},"objectId":"8","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_9","data":{"label":"Cube.075"},"objectId":"9","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_10","data":{"label":"Cube.076"},"objectId":"10","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_11","data":{"label":"Cube.077"},"objectId":"11","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_12","data":{"label":"Cube.078"},"objectId":"12","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_13","data":{"label":"Cube.079"},"objectId":"13","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_14","data":{"label":"Cube.080"},"objectId":"14","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_15","data":{"label":"Cube.081"},"objectId":"15","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_16","data":{"label":"Cube.082"},"objectId":"16","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_17","data":{"label":"Cube.083"},"objectId":"17","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_18","data":{"label":"Cube.084"},"objectId":"18","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_19","data":{"label":"Cube.086"},"objectId":"19","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_20","data":{"label":"Cube.087"},"objectId":"20","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_21","data":{"label":"Cube.088"},"objectId":"21","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_22","data":{"label":"Cube.089"},"objectId":"22","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_23","data":{"label":"Cube.090"},"objectId":"23","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_24","data":{"label":"Cube.091"},"objectId":"24","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_25","data":{"label":"Cube.092"},"objectId":"25","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_26","data":{"label":"Cube.093"},"objectId":"26","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_27","data":{"label":"Cube.094"},"objectId":"27","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_28","data":{"label":"Cube.095"},"objectId":"28","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_29","data":{"label":"Cube.096"},"objectId":"29","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_30","data":{"label":"Cube.097"},"objectId":"30","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_31","data":{"label":"Cube.098"},"objectId":"31","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_32","data":{"label":"Cube.099"},"objectId":"32","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_33","data":{"label":"Cube.100"},"objectId":"33","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_34","data":{"label":"Cube.101"},"objectId":"34","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_35","data":{"label":"Cube.102"},"objectId":"35","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_36","data":{"label":"Cube.103"},"objectId":"36","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_37","data":{"label":"Cube.104"},"objectId":"37","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_38","data":{"label":"Cube.105"},"objectId":"38","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_39","data":{"label":"Cube.106"},"objectId":"39","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_40","data":{"label":"Cube.107"},"objectId":"40","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_41","data":{"label":"Cube.108"},"objectId":"41","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_42","data":{"label":"Cube.109"},"objectId":"42","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_43","data":{"label":"Cube.110"},"objectId":"43","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_44","data":{"label":"Cube.111"},"objectId":"44","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_45","data":{"label":"Cube.112"},"objectId":"45","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_46","data":{"label":"Cube.113"},"objectId":"46","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_47","data":{"label":"Cube.114"},"objectId":"47","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_48","data":{"label":"Cube.115"},"objectId":"48","class":"InnerModel3DObject"},{"id":"model_324C281F_3E5C_FA40_41C9_50217CA98E60_49","data":{"label":"Cube.116"},"objectId":"49","class":"InnerModel3DObject"},{"id":"res_2DC89C39_3E5F_5A43_41A2_0B9333FB0380","levels":[{"class":"Model3DResourceLevel","url":"media/model_324C281F_3E5C_FA40_41C9_50217CA98E60/scene.glb"},{"tags":"mobile","class":"Model3DResourceLevel","url":"media/model_324C281F_3E5C_FA40_41C9_50217CA98E60/scene_mobile.glb"}],"class":"Model3DResource"},{"id":"cam_2DF4AC3A_3E5F_5A41_41B9_19D0BDA43E87","minY":-2.98,"initialX":-12.13,"maxX":8.66,"maxY":1.45,"initialZ":-4.22,"minX":-15.23,"initialY":-1.35,"minZ":-11.16,"initialYaw":89.1,"initialPitch":-7.98,"class":"FirstPersonModel3DCamera","autoNearFar":true,"maxZ":10.91}],"propagateClick":false,"width":"100%","height":"100%","children":["this.MainViewer"],"scripts":{"getMainViewer":TDV.Tour.Script.getMainViewer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"downloadFile":TDV.Tour.Script.downloadFile,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"mixObject":TDV.Tour.Script.mixObject,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showPopupImage":TDV.Tour.Script.showPopupImage,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getComponentByName":TDV.Tour.Script.getComponentByName,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"cloneBindings":TDV.Tour.Script.cloneBindings,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getKey":TDV.Tour.Script.getKey,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setValue":TDV.Tour.Script.setValue,"historyGoBack":TDV.Tour.Script.historyGoBack,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"shareSocial":TDV.Tour.Script.shareSocial,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setMapLocation":TDV.Tour.Script.setMapLocation,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"translate":TDV.Tour.Script.translate,"quizShowScore":TDV.Tour.Script.quizShowScore,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getMediaByName":TDV.Tour.Script.getMediaByName,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setLocale":TDV.Tour.Script.setLocale,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"init":TDV.Tour.Script.init,"executeJS":TDV.Tour.Script.executeJS,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"initQuiz":TDV.Tour.Script.initQuiz,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"clone":TDV.Tour.Script.clone,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"unregisterKey":TDV.Tour.Script.unregisterKey,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"startMeasurement":TDV.Tour.Script.startMeasurement,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getOverlays":TDV.Tour.Script.getOverlays,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"registerKey":TDV.Tour.Script.registerKey,"resumePlayers":TDV.Tour.Script.resumePlayers,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"isPanorama":TDV.Tour.Script.isPanorama,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"createTween":TDV.Tour.Script.createTween,"quizFinish":TDV.Tour.Script.quizFinish,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"quizStart":TDV.Tour.Script.quizStart,"showWindow":TDV.Tour.Script.showWindow,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"existsKey":TDV.Tour.Script.existsKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"playAudioList":TDV.Tour.Script.playAudioList,"openLink":TDV.Tour.Script.openLink,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getPixels":TDV.Tour.Script.getPixels},"gap":10,"layout":"absolute","backgroundColorRatios":[0]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.1.1.js.map
})();
//Generated with v2023.1.1, Mon Jul 10 2023