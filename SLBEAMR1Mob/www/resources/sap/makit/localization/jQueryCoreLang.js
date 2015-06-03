﻿/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */

jQuery.sap.declare("sap.makit.localization.jQueryCoreLang");

(function($) {
    var culture, cultures = $.cultures,
    en = cultures.en,
    standard = en.calendars.standard;

	culture = cultures["ca"] = $.extend(true, {}, en, {
        name: "ca",
        englishName: "Catalan",
        nativeName: "català",
        language: "ca",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                firstDay: 1,
                days: {
                    names: ["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],
                    namesAbbr: ["dg.","dl.","dt.","dc.","dj.","dv.","ds."],
                    namesShort: ["dg","dl","dt","dc","dj","dv","ds"]
                },
                months: {
                    names: ["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre",""],
                    namesAbbr: ["gen","feb","març","abr","maig","juny","jul","ag","set","oct","nov","des",""]
                },
                AM: null,
                PM: null,
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, d' / 'MMMM' / 'yyyy",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    f: "dddd, d' / 'MMMM' / 'yyyy HH:mm",
                    F: "dddd, d' / 'MMMM' / 'yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM' / 'yyyy"
                }
            })
        }
    }, cultures["ca"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["zh"] = $.extend(true, {}, en, {
        name: "zh-Hans",
        englishName: "Chinese (Simplified)",
        nativeName: "中文(简体)",
        language: "zh-Hans",
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currency: {
                pattern: ["$-n","$n"],
                symbol: "¥"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                days: {
                    names: ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
                    namesAbbr: ["周日","周一","周二","周三","周四","周五","周六"],
                    namesShort: ["日","一","二","三","四","五","六"]
                },
                months: {
                    names: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],
                    namesAbbr: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""]
                },
                AM: ["上午","上午","上午"],
                PM: ["下午","下午","下午"],
                eras: [{"name":"公元","start":null,"offset":0}],
                patterns: {
                    d: "yyyy/M/d",
                    D: "yyyy'年'M'月'd'日'",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy'年'M'月'd'日' H:mm",
                    F: "yyyy'年'M'月'd'日' H:mm:ss",
                    M: "M'月'd'日'",
                    Y: "yyyy'年'M'月'"
                }
            })
        }
    }, cultures["zh"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["de"] = $.extend(true, {}, en, {
        name: "de",
        englishName: "German",
        nativeName: "Deutsch",
        language: "de",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                '/': ".",
                firstDay: 1,
                days: {
                    names: ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],
                    namesAbbr: ["So","Mo","Di","Mi","Do","Fr","Sa"],
                    namesShort: ["So","Mo","Di","Mi","Do","Fr","Sa"]
                },
                months: {
                    names: ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember",""],
                    namesAbbr: ["Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez",""]
                },
                AM: null,
                PM: null,
                eras: [{"name":"n. Chr.","start":null,"offset":0}],
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "dddd, d. MMMM yyyy",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    f: "dddd, d. MMMM yyyy HH:mm",
                    F: "dddd, d. MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["de"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["fr"] = $.extend(true, {}, en, {
        name: "fr",
        englishName: "French",
        nativeName: "français",
        language: "fr",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                firstDay: 1,
                days: {
                    names: ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],
                    namesAbbr: ["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],
                    namesShort: ["di","lu","ma","me","je","ve","sa"]
                },
                months: {
                    names: ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],
                    namesAbbr: ["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]
                },
                AM: null,
                PM: null,
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd d MMMM yyyy",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    f: "dddd d MMMM yyyy HH:mm",
                    F: "dddd d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["fr"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ja"] = $.extend(true, {}, en, {
        name: "ja",
        englishName: "Japanese",
        nativeName: "日本語",
        language: "ja",
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currency: {
                pattern: ["-$n","$n"],
                decimals: 0,
                symbol: "¥"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                days: {
                    names: ["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],
                    namesAbbr: ["日","月","火","水","木","金","土"],
                    namesShort: ["日","月","火","水","木","金","土"]
                },
                months: {
                    names: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月",""],
                    namesAbbr: ["1","2","3","4","5","6","7","8","9","10","11","12",""]
                },
                AM: ["午前","午前","午前"],
                PM: ["午後","午後","午後"],
                eras: [{"name":"西暦","start":null,"offset":0}],
                patterns: {
                    d: "yyyy/MM/dd",
                    D: "yyyy'年'M'月'd'日'",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy'年'M'月'd'日' H:mm",
                    F: "yyyy'年'M'月'd'日' H:mm:ss",
                    M: "M'月'd'日'",
                    Y: "yyyy'年'M'月'"
                }
            }),
            Japanese: $.extend(true, {}, standard, {
                name: "Japanese",
                days: {
                    names: ["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],
                    namesAbbr: ["日","月","火","水","木","金","土"],
                    namesShort: ["日","月","火","水","木","金","土"]
                },
                months: {
                    names: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月",""],
                    namesAbbr: ["1","2","3","4","5","6","7","8","9","10","11","12",""]
                },
                AM: ["午前","午前","午前"],
                PM: ["午後","午後","午後"],
                eras: [{"name":"平成","start":null,"offset":1867},{"name":"昭和","start":-1812153600000,"offset":1911},{"name":"大正","start":-1357603200000,"offset":1925},{"name":"明治","start":60022080000,"offset":1988}],
                twoDigitYearMax: 99,
                patterns: {
                    d: "gg y/M/d",
                    D: "gg y'年'M'月'd'日'",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "gg y'年'M'月'd'日' H:mm",
                    F: "gg y'年'M'月'd'日' H:mm:ss",
                    M: "M'月'd'日'",
                    Y: "gg y'年'M'月'"
                }
            })
        }
    }, cultures["ja"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["es"] = $.extend(true, {}, en, {
        name: "es",
        englishName: "Spanish",
        nativeName: "español",
        language: "es",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                firstDay: 1,
                days: {
                    names: ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],
                    namesAbbr: ["dom","lun","mar","mié","jue","vie","sáb"],
                    namesShort: ["do","lu","ma","mi","ju","vi","sá"]
                },
                months: {
                    names: ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],
                    namesAbbr: ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]
                },
                AM: null,
                PM: null,
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd' de 'MMMM' de 'yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd, dd' de 'MMMM' de 'yyyy H:mm",
                    F: "dddd, dd' de 'MMMM' de 'yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM' de 'yyyy"
                }
            })
        }
    }, cultures["es"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ru"] = $.extend(true, {}, en, {
        name: "ru",
        englishName: "Russian",
        nativeName: "русский",
        language: "ru",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n$","n$"],
                ',': " ",
                '.': ",",
                symbol: "р."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                '/': ".",
                firstDay: 1,
                days: {
                    names: ["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],
                    namesAbbr: ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
                    namesShort: ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]
                },
                months: {
                    names: ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь",""],
                    namesAbbr: ["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек",""]
                },
                monthsGenitive: {
                    names: ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря",""],
                    namesAbbr: ["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек",""]
                },
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d MMMM yyyy 'г.'",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy 'г.' H:mm",
                    F: "d MMMM yyyy 'г.' H:mm:ss",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["ru"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["pt"] = $.extend(true, {}, en, {
        name: "pt",
        englishName: "Portuguese",
        nativeName: "Português",
        language: "pt",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
            	pattern: ["-n $","n $"],
    			",": ".",
    			".": ",",
    			symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
            	"/": "-",
    			firstDay: 1,
    			days: {
    				names: ["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"],
    				namesAbbr: ["dom","seg","ter","qua","qui","sex","sáb"],
    				namesShort: ["D","S","T","Q","Q","S","S"]
    			},
    			months: {
    				names: ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro",""],
    				namesAbbr: ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez",""]
    			},
    			AM: null,
    			PM: null,
    			eras: [{"name":"d.C.","start":null,"offset":0}],
    			patterns: {
    				d: "dd-MM-yyyy",
    				D: "dddd, d' de 'MMMM' de 'yyyy",
    				t: "HH:mm",
    				T: "HH:mm:ss",
    				f: "dddd, d' de 'MMMM' de 'yyyy HH:mm",
    				F: "dddd, d' de 'MMMM' de 'yyyy HH:mm:ss",
    				M: "d/M",
    				Y: "MMMM' de 'yyyy"
    			}
            })
        }
    }, cultures["pt"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["pl-PL"] = $.extend(true, {}, en, {
        name: "pl-PL",
        englishName: "Polish (Poland)",
        nativeName: "polski (Polska)",
        language: "pl",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "zł"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                '/': "-",
                firstDay: 1,
                days: {
                    names: ["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"],
                    namesAbbr: ["N","Pn","Wt","Śr","Cz","Pt","So"],
                    namesShort: ["N","Pn","Wt","Śr","Cz","Pt","So"]
                },
                months: {
                    names: ["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień",""],
                    namesAbbr: ["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru",""]
                },
                monthsGenitive: {
                    names: ["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia",""],
                    namesAbbr: ["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru",""]
                },
                AM: null,
                PM: null,
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "d MMMM yyyy",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    f: "d MMMM yyyy HH:mm",
                    F: "d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["pl-PL"]);
    culture.calendar = culture.calendars.standard;
    
    culture = cultures["he"] = $.extend(true, {}, en, {
        name: "he",
        englishName: "Hebrew",
        nativeName: "עברית",
        language: "he",
        isRTL: true,
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currency: {
                pattern: ["$-n","$ n"],
                symbol: "₪"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                days: {
                    names: ["יום ראשון","יום שני","יום שלישי","יום רביעי","יום חמישי","יום שישי","שבת"],
                    namesAbbr: ["יום א","יום ב","יום ג","יום ד","יום ה","יום ו","שבת"],
                    namesShort: ["א","ב","ג","ד","ה","ו","ש"]
                },
                months: {
                    names: ["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר",""],
                    namesAbbr: ["ינו","פבר","מרץ","אפר","מאי","יונ","יול","אוג","ספט","אוק","נוב","דצמ",""]
                },
                eras: [{"name":"לספירה","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd dd MMMM yyyy",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    f: "dddd dd MMMM yyyy HH:mm",
                    F: "dddd dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            }),
            Hebrew: $.extend(true, {}, standard, {
                name: "Hebrew",
                '/': " ",
                days: {
                    names: ["יום ראשון","יום שני","יום שלישי","יום רביעי","יום חמישי","יום שישי","שבת"],
                    namesAbbr: ["א","ב","ג","ד","ה","ו","ש"],
                    namesShort: ["א","ב","ג","ד","ה","ו","ש"]
                },
                months: {
                    names: ["תשרי","חשון","כסלו","טבת","שבט","אדר","אדר ב","ניסן","אייר","סיון","תמוז","אב","אלול"],
                    namesAbbr: ["תשרי","חשון","כסלו","טבת","שבט","אדר","אדר ב","ניסן","אייר","סיון","תמוז","אב","אלול"]
                },
                eras: [{"name":"C.E.","start":null,"offset":0}],
                twoDigitYearMax: 5790,
                patterns: {
                    d: "dd MMMM yyyy",
                    D: "dddd dd MMMM yyyy",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    f: "dddd dd MMMM yyyy HH:mm",
                    F: "dddd dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["he"]);
    culture.calendar = culture.calendars.standard;
 })(jQuery);
