var popOffsetX=-260,popOffsetX=-50,popOffsetX=15,popOffsetY=-440,popOffsetY=-15,popOffsetY=5,g_StageLimit=150,g_max_quality=1.8,g_max_grade=5,g_max_level=90,g_max_grade_csv=g_max_level=g_max_grade=1,g_max_level_csv=110,jsGlobalParameter="http://file.kouwua.net/gdo/javascript/gdo_global_parameter.js",jsGlobalLib="http://file.kouwua.net//gdo/javascript/gdo_global_lib.js",js_players="http://file.kouwua.net/sb/javascript/players.js",js_string_players="http://file.kouwua.net/sb/javascript/string_players.js",
js_string_skill="http://file.kouwua.net/sb/javascript/string_skill.js",js_pk_skill="http://file.kouwua.net/sb/javascript/pk_skill.js",js_skill="http://file.kouwua.net/sb/javascript/skill.js",js_mall="http://file.kouwua.net/sb/javascript/mall.js",js_probability_form="http://file.kouwua.net/sb/javascript/probability_form.js",js_card_form="http://file.kouwua.net/sb/javascript/card_form.js",js_string="http://file.kouwua.net/sb/javascript/string.js",js_idle_player="http://file.kouwua.net/sb/javascript/idle_player.js",
js_idle_team="http://file.kouwua.net/sb/javascript/idle_team.js",js_stage="http://file.kouwua.net/sb/javascript/stage.js",js_stage_part="http://file.kouwua.net/sb/javascript/stage_part.js",js_player_team="http://file.kouwua.net/sb/javascript/player_team.js",js_master="http://file.kouwua.net/sb/javascript/master.js",js_master_shop="http://file.kouwua.net/sb/javascript/master_shop.js",js_train="http://file.kouwua.net/sb/javascript/training.js",js_taiwan="http://file.kouwua.net/sb/javascript/taiwan.js",
js_taiwan_shop="http://file.kouwua.net/sb/javascript/taiwan_shop.js",js_equipment="http://file.kouwua.net/sb/javascript/equipment.js",js_equip_name="http://file.kouwua.net/sb/javascript/equip_name.js",js_equip_set="http://file.kouwua.net/sb/javascript/equip_set.js",js_equipskill="http://file.kouwua.net/sb/javascript/equipskill.js",js_string_equipskill="http://file.kouwua.net/sb/javascript/string_equipskill.js",js_equip_dedicated="http://file.kouwua.net/sb/javascript/equip_dedicated.js",js_star_main=
"http://file.kouwua.net/sb/javascript/star_main.js",js_star_cond="http://file.kouwua.net/sb/javascript/star_cond.js",js_package_form="http://file.kouwua.net/sb/javascript/package_form.js",js_chip_form="http://file.kouwua.net/sb/javascript/chip_form.js",js_store="http://file.kouwua.net/sb/javascript/store.js",js_item_up="http://file.kouwua.net/sb/javascript/item_up.js",js_box_mall="http://file.kouwua.net/sb/javascript/box_mall.js",js_box_form="http://file.kouwua.net/sb/javascript/box_form.js",js_box_price=
"http://file.kouwua.net/sb/javascript/box_price.js",js_lader_store="http://file.kouwua.net/sb/javascript/lader_store.js",js_lader_reward_rank1="http://file.kouwua.net/sb/javascript/lader_reward_rank1.js",js_japan="http://file.kouwua.net/sb/javascript/japan.js",js_japan_event="http://file.kouwua.net/sb/javascript/japan_event.js",js_japan_battle="http://file.kouwua.net/sb/javascript/japan_battle.js",js_japan_reward_rank1="http://file.kouwua.net/sb/javascript/japan_reward_rank1.js",js_equip_specify=
"http://file.kouwua.net/sb/javascript/equip_specify.js",js_skillstone="http://file.kouwua.net/sb/javascript/skillstone.js",js_teacher_box="http://file.kouwua.net/sb/javascript/teacher_box.js",js_teacher_boxstring="http://file.kouwua.net/sb/javascript/teacher_boxstring.js",js_teacher_set="http://file.kouwua.net/sb/javascript/teacher_set.js",js_mapping={camp:{1:"\u9b4f",2:"\u8700",3:"\u5433",4:"\u4ed6",9:"\u7121"},type:{0:"\u6295\u624b",1:"\u91ce\u624b",2:"\u91ce\u624b",3:"\u91ce\u624b"},skill_type:{1:"\u4e3b",
2:"\u88ab",3:"\u958b",5:"\u9b3c",6:"\u795e"},equip_type:{1:"\u6b66\u5668",2:"\u982d\u76d4",3:"\u7403\u8863",4:"\u624b\u5957",5:"\u7403\u978b"},currency:{1:"\u5143\u5bf6",2:"\u9280\u5169",29:"\u91d1\u7403",30:"\u9280\u7403",31:"\u9285\u7403",32:"\u9435\u7403",34:"\u50b3\u8aaa\u91d1\u624b\u5957",45:"\u6d3b\u52d5\u9053\u5177",57:"\u62db\u52df\u4ee4(\u9b4f)",58:"\u62db\u52df\u4ee4(\u8700)",59:"\u62db\u52df\u4ee4(\u5433)",60:"\u62db\u52df\u4ee4(\u4ed6)",76:"\u5f69\u7403"},type66item:{127:"\u56db\u661f\u6b66\u5668",
147:"\u56db\u661f\u6b66\u5668(\u4eba)",501:"\u56db\u661f\u6b66\u5668",502:"\u56db\u661f\u6b66\u5668(\u9ec3)",503:"\u56db\u661f\u6b66\u5668(\u7384)",504:"\u56db\u661f\u6b66\u5668(\u4eba)",505:"\u56db\u661f\u6b66\u5668(\u5730)"},type72item:{30:"+30\u5c6c\u6027\u9053\u5177",20:"+20\u5c6c\u6027\u9053\u5177",10:"+10\u5c6c\u6027\u9053\u5177",5:"+5\u5c6c\u6027\u9053\u5177",3:"+3\u5c6c\u6027\u9053\u5177",2:"+2\u5c6c\u6027\u9053\u5177",1:"+1\u5c6c\u6027\u9053\u5177"},type85item:{115:"\u6280\u80fd\u77f3(\u5929)",
114:"\u6280\u80fd\u77f3(\u5730)",113:"\u6280\u80fd\u77f3(\u4eba)",112:"\u6280\u80fd\u77f3(\u7384)",111:"\u6280\u80fd\u77f3(\u9ec3)",501:"\u6280\u80fd\u77f3(\u9ec3)",502:"\u6280\u80fd\u77f3(\u9ec3)",503:"\u6280\u80fd\u77f3(\u9ec3)",511:"\u6280\u80fd\u77f3(\u7384)",512:"\u6280\u80fd\u77f3(\u7384)",513:"\u6280\u80fd\u77f3(\u7384)",521:"\u6280\u80fd\u77f3(\u4eba)",522:"\u6280\u80fd\u77f3(\u4eba)",523:"\u6280\u80fd\u77f3(\u4eba)",523:"\u6280\u80fd\u77f3(\u4eba)",524:"\u6280\u80fd\u77f3(\u4eba)",531:"\u6280\u80fd\u77f3(\u5730)",
532:"\u6280\u80fd\u77f3(\u5730)",533:"\u6280\u80fd\u77f3(\u5730)",533:"\u6280\u80fd\u77f3(\u5730)",534:"\u6280\u80fd\u77f3(\u5730)"},official:{1:"\u6587\u5b98",2:"\u6b66\u5b98",3:"\u6587\u6b66"},quality_grade:{1:2,2:4,3:7,4:9,5:9,6:10},quality_ratio:{1:1.2,2:1.4,3:1.6,4:1.8,5:2,6:2.2},quality_ratio_display:{1:"C",2:"B",3:"A",4:"S",5:"SS",6:"SR"},quality_level:{1:60,2:80,3:110,4:130,5:100,6:100},grade_ratio:{1:3.245,2:3.245,3:3.245,4:4.05,5:4.05,6:4.455,7:4.455,8:4.755,9:5.3},grade_remain_point:{1:0,
2:159.005,3:350.46,4:574.365,5:894.315,6:1254.765,7:1695.81,8:2181.405,9:2747.25},minibox_history:{46:3147,47:3152,48:3144,49:3499,50:3498,51:3497,52:3153,53:3496,54:3495,55:3145,56:3494,57:3154,58:3493,59:3157,60:3324,61:3156,27:3189,62:3193,12:3128,26:3134,7:3126,2:3119,5:3121,1:3118,6:3123,37:3139,43:4382,35:3184,63:3710,64:3319,65:3321,66:3322,67:3324,68:3327,69:3325,70:3328,71:3330,72:3315,73:3316,74:3307,75:3318,76:3333,77:3333,78:3331,79:3335,80:3339,81:3338,82:3336,83:3341,84:3311,85:3344,
86:3345,87:3347,88:3350,89:3348,90:3353,91:3354,92:3359,93:3360,94:3362,95:3342,96:3491,98:3489,99:3488,100:3487,101:3732,103:3366,104:3367,105:3369,106:3370,107:3371,108:3372,109:3373,111:3375,112:3376,113:3377,114:3378,115:3379,116:3710,117:3380,118:3381,119:3382,120:3383,121:3384,122:3385,123:3386,124:3387,125:3388,126:3163,127:3164,128:3393,129:3169,130:3168,131:3801,132:3170,133:3171,134:3167,135:3173,136:3174,137:3172,138:3175,139:3179,140:3180,141:3166,142:3302,143:3178,144:3310,145:3176,146:3324,
147:3321,148:3322,149:3322,150:3322,151:3327,152:3330,153:3325,154:3331,155:3332,156:3333,157:3335,158:3336,159:3338,160:3339,161:3304,162:3306,163:3303,164:3307,165:3309,166:3312,167:3313,168:3316}},js_mall_histories=[{1:3100},{2:3101},{3:3102},{4:3103},{5:3104},{6:3105},{7:3106},{8:3107},{9:3108},{10:3109},{11:3110},{12:3111},{13:3112},{14:3113},{15:3114},{16:3115},{17:3116},{18:3117},{19:3118},{20:3119},{21:3120},{22:3121},{23:3122},{24:3123},{25:3124},{26:3125},{27:3126},{28:3127},{29:3128},{30:3129},
{31:3130},{32:3131},{33:3132},{34:3133},{35:3134},{36:3135},{37:3136},{38:3137},{39:3138},{40:3139},{41:3140},{42:3141},{43:3142},{44:3143},{45:3144},{46:3145},{47:3146},{48:3147},{49:3148},{50:3149},{51:3150},{52:3151},{53:3152},{54:3153},{55:3154},{56:3155},{57:3156},{58:3157},{59:3158},{60:3159},{61:3160},{62:3161},{63:3162},{64:3163},{65:3164},{66:3165},{67:3166},{68:3167},{69:3168},{70:3169},{71:3170},{72:3171},{73:3172},{74:3173},{75:3174},{76:3175},{77:3176},{78:3177},{79:3178},{80:3179},{81:3180},
{82:3301},{87:3302},{88:3303},{89:3304,90:3305},{91:3306},{92:3307,93:3308},{94:3309},{95:3310,96:3311},{97:3312},{98:3313,99:3314},{100:3315},{101:3316,102:3317},{103:3318,501:3726},{104:3319,105:3320},{106:3321},{107:3322,108:3323},{109:3324},{110:3325,111:3326},{112:3327},{113:3328,114:3329},{114:3330},{115:3331,502:3731},{116:3332},{117:3333,118:3334},{119:3335},{120:3336,121:3337},{122:3338},{123:3339,124:3340},{125:3341},{126:3342},{127:3343},{503:3733},{128:3344},{129:3345,130:3346,336:3712},
{131:3347},{132:3348,133:3349},{134:3350},{135:3351,136:3352},{137:3353},{138:3354,139:3355},{140:3356},{141:3357,142:3358,505:3735,506:3734},{143:3337},{148:3360,149:3361},{150:3362},{151:3363,152:3364},{153:3365},{154:3366,155:3367,156:3368,507:3736},{157:3369},{158:3370},{159:3371},{160:3372},{161:3373},{162:3374},{163:3375},{164:3376},{165:3377},{166:3378},{167:3379,339:3725},{168:3380,341:3706},{169:3381},{170:3382},{171:3383},{172:3384},{173:3385,509:3726},{175:3387},{176:3388},{10068:3335,
10069:3361,10070:3358,10071:3364},{177:3392,178:3391,179:3390,180:3389},{182:3164},{183:3393,510:3731},{184:3169},{185:3168,511:3311},{186:3801},{187:3170,512:3305},{188:3171,513:3394},{189:3167,515:3308,342:3708},{190:3173,516:3119},{191:3174},{192:3172,517:3733},{193:3177,518:3395},{198:3175,520:3323},{199:3179,521:3396,313:3712},{200:3180,522:3334},{201:3166,523:3397},{202:3302,524:3326},{203:3178,525:3398,346:3740},{204:3310,526:3340},{205:3176,527:3399},{206:3341,528:3329},{207:3324,529:3735},
{208:3321,530:3400},{209:3322,531:3401},{210:3319,532:3337},{211:3328,533:3402},{212:3327,534:3346},{213:3330},{214:3325,535:3343},{215:3331},{216:3332,536:3352,10072:3737},{217:3333},{218:3335,537:3320},{219:3336},{220:3338,538:3317},{221:3339},{222:3304,539:3349},{223:3306},{224:3303,540:3361},{225:3307},{226:3309,541:3358,348:3725},{227:3312,351:3706},{228:3313,542:3355},{229:3316,543:3726},{230:3318,544:3364},{231:3342},{232:3344,545:3720},{233:3345},{234:3347,546:3165},{235:3348},{236:3350,547:3723},
{237:3351},{238:3353,548:3722},{239:3354},{240:3356},{241:3357},{242:3359,549:3731},{243:3360},{244:3362},{245:3363},{246:3365},{247:3366},{248:3708,249:3367},{250:3369},{251:3370},{252:3371}];
