import React, { useState, useEffect } from 'react';
import { Video, User, Box, Sparkles, Layers, ArrowRight, ArrowLeft, X, ChevronLeft, ChevronRight, Play, Folder } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const FASHION_PRODUCT_VIDEO_URLS = [
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786862275/SHUTTER_BUGS_ROLLING_02.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786862178/Comp_1.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786862167/Reel.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786862155/Sequence_11_3.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786862155/Sequence_18_3.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786862154/Sequence_06_4.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786862155/Sequence_19_3.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786862150/Sequence_09_3.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786862149/Sequence_04_5.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786862147/Sequence_08_4.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786385751/AMSWAN_REEL_updated_transition_1.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786385751/BLUF1390.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786385732/crapsss_ads_5_449.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786385730/Crapsss_Reel_15.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786385731/Crapsss_Reel_17.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786385718/Amswan_Transiton_video_4_1.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786385692/Amswan_Transiton_video_5.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786385675/AMSWAN_REEL_17.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355763/SHAGUN_10.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355627/EFFECTINE_2.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355601/RITESH_INTERNATIONAL_01.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355516/VELOCITECH_007.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355505/Sequence_18_3.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355467/Abhishek_1.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355437/Bathroom_01.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355415/MAFADENY_OUTDOOR_SHHOOT.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355405/VELOCITECH_005.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355321/Shiv_industries_New_01.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355155/JAVED_01.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355097/Dejure_fitness_01.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786355081/EFFECTINE_06.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786354983/JAVED_02.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786354961/Pictaz_Studio_03.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786354873/Pictaz_Studio_23-2.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786354725/Kasuallyb_outdoor_tasveer_reel_1.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786354593/Varija_Reel_2.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786354517/Tankhi_reel.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786354300/EFFECTINE_01.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786353821/HOUSE_OF_BRAND_15.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786353427/Pictaz_Studio_05_1.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786353543/Pictaz_Studio_07.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786353169/STYLUM_REEL_1.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786353090/Oomph_reel_1.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786353060/15th_april_reel_1.mp4",
  "https://res.cloudinary.com/yoesjpsv/video/upload/v1786352919/mafideny_outdoor_2.mp4"
];

const MODEL_PHOTOSHOOT_URLS = [
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862097/IMG_E1808.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862097/IMG_E1811.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862097/IMG_E1809.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862096/IMG_E1805.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862096/IMG_3706.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862095/IMG_3750.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862095/IMG_3728.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862095/IMG_3700.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862094/IMG_2663.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862094/IMG_3626.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862094/IMG_3537.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862093/IMG_3536.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862093/IMG_2413.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862093/IMG_2412.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862092/IMG_2173.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862092/IMG_2007.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862092/IMG_2008.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862091/IMG_1985.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862091/IMG_1817.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862091/IMG_1984.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862091/IMG_1967.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862090/IMG_1816.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862090/IMG_1637.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862089/IMG_1562.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862089/IMG_1555.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862089/IMG_1189.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862088/IMG_0407.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862088/IMG_0933.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862088/IMG_0729.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862088/IMG_0608.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862088/IMG_0709.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862087/IMG_0425.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862087/IMG_0582.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862086/IMG_0331.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862086/IMG_0322-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862086/IMG_0322.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862085/IMG_0316-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862085/IMG_0314-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862085/IMG_0308-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862084/IMG_0297.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862084/IMG_0297-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862084/IMG_0294-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862084/IMG_0282.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862083/IMG_0291.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862083/IMG_0246-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862083/IMG_0242-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862082/IMG_0200.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862082/IMG_0128.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862082/IMG_0123-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862082/IMG_0122-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862081/IMG_0106.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862081/IMG_0103.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862081/IMG_0099.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862081/IMG_0101.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862080/IMG_0081.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862080/IMG_0078.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862080/IMG_0083.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862079/IMG_0034.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862079/IMG_0035.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862079/IMG_0031.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862079/IMG_0032.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862078/IMG_0029.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862078/IMG_0028.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862077/IMG_0027.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862077/image00038.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862077/image00039.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862076/FDGT3504.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862076/image00037.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862076/ENTN7667.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862075/EFCK6950.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862058/DPP_0043.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862056/DPP_0026.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862056/DPP_0020.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862056/DPP_0019.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862055/DPP_0008.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862055/DPP_0005.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862054/DPP_0004.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862054/DFZW1891.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862054/DPP_0003.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862053/DDDH4669.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862052/CTGJ2072.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862052/AEGA5355.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862051/A3328-21_06.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862051/ABJU0366.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862050/A3328-15_06.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862050/A3328-17_06.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862050/A3328-10_06.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862050/A3328-07_06.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862049/A3328-04_07.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862049/A3328-04_06.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862049/A3328-01_08.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862048/A3328-01_07.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862048/_MG_9879.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862048/_MG_9888.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862048/_MG_9893.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862047/_MG_9875.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862047/_MG_9867.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862047/_MG_9862.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862046/_MG_9853.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862046/_MG_9849.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862046/_MG_9838.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862045/_MG_9835.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862045/_MG_9816.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862045/_MG_9826.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862045/_MG_9824.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862044/_MG_9810.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862044/_MG_9805.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862043/_MG_9791.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862043/_MG_9796.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862043/_MG_9767.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862043/_MG_9780.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862042/_MG_9753.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862042/_MG_9738.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862042/_MG_9734.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862041/_MG_9726.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862041/_MG_9716.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862041/_MG_9662.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862040/_MG_9653.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862040/_MG_9661.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862040/_MG_9642.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862039/_MG_9631.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862039/_MG_7492.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862039/_MG_9625.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862039/_MG_7490.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862038/_MG_7468.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862038/_MG_7463.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862038/_MG_7453.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862038/_MG_7456.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862037/_MG_7441.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862037/_MG_7439.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862037/_MG_7436.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862036/_MG_7433.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862036/_MG_6025-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862036/_MG_6005-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862035/_MG_2593.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862035/_MG_2598.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862035/_MG_2087-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862035/_MG_2083-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862034/_MG_1968-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862034/_MG_1961-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862034/_MG_1943-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862033/_MG_1938-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862033/_MG_1580.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862033/_MG_1750.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862033/_MG_1530-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862033/_MG_1574.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862032/_MG_1454-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862032/_MG_1448-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862031/_MG_1438-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862031/_MG_1432-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862031/_MG_1232-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862031/_MG_1221-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862030/_MG_0748.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862030/_MG_0746.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862030/_MG_0735.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862029/_MG_0728.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862029/_MG_0724.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862029/_MG_0710.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862028/_MG_0720.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862028/_MG_0703.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862028/6F6AE0092.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862028/6F6AE0128.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862027/6F6AE0096.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862027/6F6AE0089.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862027/6F6AE0091.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862026/6F6AE0086.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862026/6F6AE0088.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862026/6F6AE0074.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862025/6F6AE0070.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862024/6F6AE0057.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862024/6F6AE0053.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862023/6F6AE0049.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862023/6F6AE0051.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862023/6F6AE0048.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862023/6F6AE0045.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862022/6F6A8854.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862022/6F6A8761.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862021/6F6A8350.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862021/6F6A7957.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862020/6F6A8361.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862020/6F6A8059.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862019/6F6A7954.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862018/6F6A7906.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862018/6F6A7941.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862018/6F6A7905.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862018/6F6A7788.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862017/6F6A7794.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862017/6F6A7783.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862015/044A8992.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862015/044A8987.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862014/044A8931.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862014/044A8922.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862014/044A8912.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862013/00001087-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862013/00000985-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862013/00000971-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862013/00001086-2.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786862013/00001054-2.jpg"
];

const PRODUCT_SHOOT_JEWELLERY_URLS = [
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381405/_MG_9184.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381405/_MG_8009.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381404/_MG_9339.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381405/_MG_9148.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381405/_MG_9507.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381406/_MG_9629.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381406/_MG_9539.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381411/_MG_9630.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381413/14.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381413/15.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381414/20.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381460/422A9807.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381460/422A8266.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381459/422A8229.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381462/422A9828.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381462/422A9812_Vogue.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382489/MOSERBAER_8901124028913_2.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382489/MOSERBAER_8901124028913_1.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382107/IMG_6549.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382098/Kulsu.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382098/IMG_2984.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382097/Kulsu_0.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382097/IMG_9354.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382096/IMG_8551.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382095/IMG_7624.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382095/IMG_7587.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382095/IMG_7529.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382095/IMG_7457.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382094/IMG_6766_Much_More.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382094/IMG_6764_Much_More.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382092/IMG_6545.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382092/IMG_6547.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382092/IMG_6732_Much_More.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382090/IMG_5709.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382090/IMG_6471.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382090/IMG_6526.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382089/IMG_6502.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382089/IMG_6498.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382087/IMG_6170_Much_More.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382086/IMG_6157_Much_More.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382086/IMG_6168_Much_More.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382085/IMG_4058.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382084/IMG_5348.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382084/IMG_6080.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382084/IMG_5548.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382083/IMG_5130.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382082/IMG_4037.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382082/IMG_4055.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382082/IMG_4729.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382081/IMG_3603.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382081/IMG_4035.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382080/IMG_3988.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382080/IMG_3607.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382079/IMG_3594.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382079/IMG_3559.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382079/IMG_2981.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382079/IMG_1894.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382078/IMG_2944.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382078/IMG_2951.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382076/IMG_2906.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382076/IMG_2926.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382076/IMG_2931.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382074/IMG_2312.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382074/IMG_1894_Kulsu.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382072/IMG_1852_Kulsu.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382072/IMG_1884_Kulsu.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382071/IMG_1037.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382071/IMG_1810.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382070/IMG_1681.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382069/IMG_1648_Chui_Mui.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382069/IMG_0758.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382068/IMG_0784.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382068/IMG_0781.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382067/IMG_0752.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382066/IMG_0683.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382066/IMG_0695.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382065/IMG_0671.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382064/IMG_0666.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382063/IMG_0131.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382061/IMG_0092.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382062/IMG_0128_Karat_Cart.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382059/IMG_0075.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382058/IMG_0060.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382056/IMG_0054_Dugri_Style.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382053/IMG_0024_Dugristyle.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381686/IMG_0010.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381500/IMG_0002.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381476/422A9818.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381472/Dugristyle.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381471/Dugristyle_0.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381471/d1998cf1-541e-4c8c-9e5e-aadffde20e141645713889741NEUDISWomenRedNecklaceandChains1.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381459/422A9811.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381457/422A9804.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381457/422A9443_Zeneme.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381455/422A8256.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381454/422A8246.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381453/422A8232.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381453/422A3412.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381452/422A7664.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381452/422A7652.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381450/422A3369.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381450/422A7650.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381450/422A7649.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381448/422A3390.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381448/422A2362.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381446/422A2368_Sonoor.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381446/422A3376-2.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381446/422A2392_Sonoor.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381445/422A2375_Sonoor.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381445/422A1943.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381444/422A2370_Sonoor.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381442/422A2198.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381442/422A2197.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381440/422A1918.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381440/422A1978.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381439/422A1970.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381438/422A0664.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381437/422A0690.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381438/422A1918_Kulsu.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381416/30.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381416/31.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381416/29.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381416/28.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381416/27.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381415/25.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381415/26.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381414/23.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381414/21.jpg"
];

const PRODUCT_SHOOT_WATCH_URLS = [
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382489/s.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381414/13.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381364/_MG_5995.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381397/_MG_8705.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381398/_MG_8716.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381408/01__MG_1927.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381412/12..jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381417/16.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381466/2819_1.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381467/2819_2.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381469/09728_RED_2.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381468/09728_RED_1.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382130/MG_8705.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381414/17.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381399/_MG_8919.jpg"
];

const PRODUCT_SHOOT_SHOES_URLS = [
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355913/_MG_6658.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355913/_MG_6682.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355913/_MG_6782.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355914/_MG_6716.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355914/_MG_6879.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355915/_MG_8999.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355915/_MG_8913.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355916/_MG_9075.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355916/_MG_9590.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355917/_MG_9637.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355917/7a557940-c9e8-41fe-bed9-76d9b969eb74.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355917/_MG_6615.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355917/38e06f50-40e6-4a3f-bdca-68be581ff2ec.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355918/100d1ca3-4137-437b-9589-a03573bc3fd5.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355918/0664f835-0034-4cec-b63e-b57a6cf6f6eb.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355918/_MG_9639.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355918/BBB38688-216A-425D-B019-FC05ED23F4F5.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355920/IMG_0636.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355920/IMG_1849.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355920/IMG_1895.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355921/IMG_1903.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355921/IMG_0637.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355923/IMG_1905.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355923/IMG_1915.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355923/IMG_1914.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355925/IMG_1917.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355926/IMG_1918.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355926/IMG_1916.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355927/IMG_1920.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355928/_MG_9035.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355929/IMG_1925.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355929/IMG_1922.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355929/IMG_1921.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355930/IMG_1904.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355930/IMG_1929.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355932/IMG_1933.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355932/IMG_4108.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355932/IMG_1926.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355933/IMG_1936.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355933/IMG_1930.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355934/IMG_4111.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355934/IMG_4113.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355934/IMG_4116.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355935/IMG_4117.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355935/IMG_4125.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355936/IMG_4126.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355936/IMG_4120.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355936/_MG_9067.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355937/IMG_4140.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355937/IMG_4124.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355937/IMG_4127.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355938/IMG_4143.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355938/IMG_4142.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355938/IMG_4141.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355938/IMG_4144.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786355943/IMG_4146.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381098/IMG_0041.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381100/IMG_0046.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382061/IMG_0082.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381071/_MG_4966.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381071/_MG_4970-2.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381072/_MG_1419.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381072/_MG_4972.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381073/_MG_1424.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381073/_MG_2263.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381074/_MG_1793.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381074/_MG_2275.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381074/_MG_4390.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381074/_MG_6619.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381075/_MG_2280.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381075/_MG_3078.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381076/_MG_3068.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381076/_MG_6613.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381076/_MG_1509.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381076/_MG_6865.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381076/_MG_3607.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381077/_MG_3103.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381077/_MG_3108.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381077/_MG_7479.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381078/_MG_8931.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381078/_MG_9549.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381078/_MG_9554.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381079/_MG_9582.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381079/_MG_9584.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381079/_MG_9616.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381079/_MG_9618.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381080/_MG_7504.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381080/_MG_9622.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381080/_MG_9640.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381080/_MG_9041.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381081/_MG_9643.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381081/_MG_9654.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381081/_MG_9693.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381083/_MG_9701.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381084/00.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381084/dfdfdfd.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381085/IMG_0007.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381085/_MG_7470.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381689/IMG_0013.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381090/IMG_0015.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381094/IMG_0033.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381097/IMG_0036.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381098/IMG_0045.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381099/IMG_0040.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381101/IMG_0054.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381101/IMG_0049.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381101/IMG_0052.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381102/IMG_0051.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381102/IMG_0056.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382058/IMG_0074.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382056/IMG_0057.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381104/IMG_0092-2.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382057/IMG_0059.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382060/IMG_0079.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381105/IMG_0093.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381105/IMG_0109.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381106/IMG_0133.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382059/IMG_0077.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381106/IMG_0148.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381107/IMG_0160.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381109/popop.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381109/IMG_0154.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381109/sdfgfgf.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381110/popopo.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381111/IMG_1471.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381114/IMG_0055.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381339/SA-33078.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381339/SA-33082.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381339/SA-33085.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381341/SA-51060.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381353/_MG_2726.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381420/54.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381420/55.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381421/56.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381421/57.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381421/58.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381421/59.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381422/60.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381422/61.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381422/62.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381423/63.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381423/65.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381423/64.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381434/143-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381462/422A7777_Panahi_Smart_Shop_123.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381464/2373-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381465/2520_1.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381467/4062-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381467/4159-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381467/2901-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382097/IMG_9644a.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382097/IMG_9893.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382060/IMG_0080.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382058/IMG_0073.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382057/IMG_0058.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381706/IMG_0017.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381469/10521-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381470/Adidas_58761_-1.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381469/10557-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381469/10092-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381464/2456-home_default.jpg"
];

const PRODUCT_SHOOT_PUSHEN_URLS = [
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381409/01.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381410/06.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382094/IMG_6801.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382094/IMG_6800.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382093/IMG_6798.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382091/IMG_6542.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382091/IMG_6541.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382090/IMG_6540.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382090/IMG_6538.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381417/32.jpg"
];

const PRODUCT_SHOOT_KITCHEN_URLS = [
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382067/IMG_0022.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381336/SA-29897.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381336/SA-29898.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381336/SA-29902.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381336/SA-30297.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381337/SA-30318.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381337/SA-31311.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381337/SA-31317.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381337/SA-31318.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381338/SA-31783.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381338/SA-31784.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381339/SA-33071.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381339/SA-31792.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381341/SA-25617.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381342/SA-25660.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381341/SA-25634.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381342/SA-25647.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381342/SA-25666.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381343/_MG_0122.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381344/_MG_0215.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381344/_MG_0126.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381344/_MG_0235.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381345/_MG_0234.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381345/_MG_0243.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381345/_MG_0246.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381347/_MG_0580.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381348/_MG_0567.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381352/_MG_3076.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381352/_MG_3085.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381356/_MG_3488.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381398/_MG_8827.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381399/_MG_8827-1.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381399/_MG_8828.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381407/_MG_9699.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381408/_MG_9703.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381415/24.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381419/47.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381420/48.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381420/49.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381439/422A2049_B.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381440/422A2049-2.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381461/521-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381461/523-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381462/530-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381462/524-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381463/1001-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381469/10267-home_default_1.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381468/6751-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381469/10267-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381469/10268-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381469/10271-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382096/IMG_9083.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382096/IMG_9061.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382074/IMG_2679.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382062/IMG_0125.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382059/IMG_0018.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382054/IMG_0029-2-2.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381470/CANDLE_DP-3A_SILVER_02.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381467/4369-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381467/4367-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381467/4373-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381467/4359-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381467/4363-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381417/38.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381417/36.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381417/37.jpg"
];

const PRODUCT_SHOOT_BELT_URLS = [
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381409/1.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381410/2.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381468/5794-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381459/94.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381437/93.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381436/98.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381433/97.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381433/101.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381433/99.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381430/96.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381429/95.jpg"
];

const PRODUCT_SHOOT_COSMETIC_URLS = [
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381689/IMG_0008.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381465/2548-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381465/2540-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381465/2554-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381465/2567-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381465/2581-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381465/2592-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381465/2609-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381466/2611-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381466/2664-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381465/2544-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381464/2527-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381464/2514-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381464/2511-home_default.jpg"
];

const PRODUCT_SHOOT_GOGGLES_URLS = [
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381400/_MG_9090.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381402/_MG_9108.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381418/40.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381418/41.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381418/39.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382061/IMG_0090.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381463/1916-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381463/1897-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381463/1877-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381463/1837-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381434/197-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382054/IMG_0024.jpg"
];

const PRODUCT_SHOOT_WALLET_URLS = [
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381410/3.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381468/5796-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381468/6822-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381463/1954-home_default.jpg"
];

const PRODUCT_SHOOT_BAGS_URLS = [
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381341/SA-50051.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381340/SA-50066.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381345/_MG_0046.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381392/_MG_7681.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381390/_MG_7266.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381390/_MG_7264.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381390/_MG_7260.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381390/_MG_7262.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381389/_MG_7261.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381389/_MG_7259.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381388/_MG_7249.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381388/_MG_7250.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381388/_MG_7240.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381388/_MG_7238.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381387/_MG_7237.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381387/_MG_7235.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381387/_MG_7226a.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381386/_MG_7226.jpg"
];

const PRODUCT_SHOOT_FESTIVAL_URLS = [
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381116/3cdec05d-bd46-4751-9d6b-28d3e02d1dfe.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381119/cd84c217-9ec2-4f4a-bf4b-1034ab169f87.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381119/c31246b8-44d9-4f74-8d9d-8c95f3879f56.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381119/c63ec193-7852-4ed1-be06-00acd3c77b06.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381119/b2c6299f-2260-4dc3-ae08-abdfc012977e.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381119/bd6ae8bf-e864-4e17-a37d-f76187825435.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381119/8421a3e5-bec9-4744-be83-1684f911e2ba.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381119/af13e970-ca5d-4710-a2b0-25405aff0074.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381119/07073d88-d06e-4220-a359-131ea8497dc1.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381118/184a8e80-ac18-4731-8c7a-f367111d5e6b.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381118/90fcb36a-8591-4961-aa24-c8a8754e48f6.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381118/32ad3828-4982-4db6-9592-b753893b8130.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381118/9a7d72e7-ea64-4d07-83dc-71e23c7011b9.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381117/7c78acb3-a69b-46c1-bc38-c78782523ff8.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381117/6f4799a2-a21d-4881-9f56-cacb9aeccef8.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381117/6dd9f6a6-c55f-4e67-a1b0-488b41b83e74.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381117/5a10d376-83ee-40d5-9adc-4d74f95ec8d2.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381116/2d879f47-e2e7-4b16-bf47-a032bc4841f9.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381116/1d66879c-91d7-4424-9210-da6467bfef5f.jpg"
];

const PRODUCT_SHOOT_WHITE_BG_URLS = [
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381409/3_2.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381418/42.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381418/43.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381419/45.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381419/46.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381424/79.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381423/78.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381424/81.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381424/80.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381424/82.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381425/83.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381425/84.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381425/85.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381425/86.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381426/87.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381426/88.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381463/1951-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382491/Set_11_1.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382491/Set_11_3.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382490/Set_28_3.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382490/Set_28_2.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382490/Set_11_2.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786382490/Set_28_1.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381434/202-home_default.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381418/44.jpg"
];

const PRODUCT_SHOOT_CLOTHS_URLS = [
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381410/5.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381410/4.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381411/6.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381411/7.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381411/8.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381411/9.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381411/10.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381409/2_2.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786381409/1_2.jpg",
  "https://res.cloudinary.com/yoesjpsv/image/upload/v1786861603/_MG_9625.jpg"
];

const RANDOM_WORK_URLS = [
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969057/SaveClip.App_AQPz3rJiIyQlWv4ovzjhuQAei-IxNZG52p4aBJrYnnqNV20CsYVs5dgp6phlqkWe_VADzoy6qWorCBVzzkVnw9JinhPxs9mWhVRvCYA.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969056/SaveClip.App_AQPNJdAununCUkhXpSKQyspQjTHzgH1RjlI2A__uURzv92O4_GFKsafBF6QLwnenURGgbT2qbkcIorDnbpf2Mk3HwTuQWO_3ZVRiq94.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969053/SaveClip.App_AQPWHqKnIRRWWFyH3-tNLHa0t9ayZFZCSwcAHdLT0Nc4rimPXrpiAYA-qWvl7Vri1OmRHykLGuRY1pX0sRSSW1gxwYzMcne-pGqMzag.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969051/SaveClip.App_AQPWHqKnIRRWWFyH3-tNLHa0t9ayZFZCSwcAHdLT0Nc4rimPXrpiAYA-qWvl7Vri1OmRHykLGuRY1pX0sRSSW1gxwYzMcne-pGqMzag_1.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969051/SaveClip.App_AQPwmXOdDenNNCFyd45j_KKXj3sOxUehad6tDB-j5zs7Jl5Hdz48JImjdI32A5om19b9kN6wUhquVNgpNxkvCOy3H4x4bErdL7dYqpc.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969050/SaveClip.App_AQPSTSOqMl2lfF_3Mp39eVZgewn6WhL_VfdjATrvOIRpZ6wXt-HcyhovO1ERnJvhvRNq-nZjuB2-3KNXY89cJovwbM9-ieIQGUtfmKw.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969045/SaveClip.App_AQPhLXyyrUMMY9bRqZ8NJuQbtMYn7wbg9nkWDy5NpOp4jygQ6K7C5t8bvjKPzM5oO9E7XXOhiB8ehvcr6-0t2GkSB20vM05retW83IA.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969045/SaveClip.App_AQPrIBtIsUDw4sWAfOhuU04aMl3UKZJAYnm4IdanJrDlq-HXclO0ISsk8AD8FIOKO8LLl3IPqFcHJIIDTaP2THyzYR_11pVDCoeKvO4.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969043/SaveClip.App_AQPLTOkNwEfjfreArCOeRY24KpyxCanOTZcXio2dOEykWL0vxeCeI8gZjEHHTWsZLDjx3-vT5Tn8SV-e65Ygv9egE95I0YN59k3Xv24.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969041/SaveClip.App_AQPLtDQXHyQyeGCLD9fC15Nh22Fhn_NKRhz7abkR7XJ2l712iHtq4M29GrwZAv6qYpgLIirgBN_OdrPI8WK4RdtqOKuEF4nX7vzN5uU.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969037/SaveClip.App_AQPH2W0B9bJziodzV1DSwI5hEvlhaaY0gAyrpBFlr7DpdQTOiK092o4l5wf5tebr_g_R9g_PnCp7EuXxQBOV14-O4CxfiCDrFpsXc2w.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969033/SaveClip.App_AQPdhkHIDghD606VS1epDE6RgC1VHkpFcPMnmXESAZDcJ4cJ2mezMaVb6R2YZGCi7X5g4XobQYyuCsp9hQyQKM4P_qEw0SRzs_52d0Q.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969026/SaveClip.App_AQPcjDq-LhZDwyAV5UI1FTV57eOC_ux0zKLVLknnwlLZ1WwLuyQcSDIY-HpgWp5FIGnd27-f2AoGh8Ibc1UQpNDrGnv_gecPmWFiJBU.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969025/SaveClip.App_AQOSc-iBa5Me9B9Uw5Z2r39OuwazaC9PrWZFZvRq1X58ab6mIPnSKsiEhYLfQiaHZdoFPDMd3R4ajVtaNaQVQlGnA497tutdRmtxs5U.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969025/SaveClip.App_AQP2eQq8f4fTQsJjc-ixHlVlY9lxLvcU8R7b-WKwO0Z5UfVXF9u9d88a5BHkBVkcUzyU45Ix85ftrHka9MZYVV0_OEeHiHlfDliMAbw.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969025/SaveClip.App_AQPCZ4xC8H3ZZeCTJ7MfMyi-PenI0TQREdIOSbnyI1Q8fiPCBJRIUOK-66XZzIRiHV2yI0eo9F05eEV15Ky1GfcjopmRBSyjFqq8o8w.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969024/SaveClip.App_AQP_aZ8Vn8AwnnaWuegsqTCpNZOUvVYvsg7kr3nu7-WCO6Dp1CC40khVedvruzVNftk5nPijQMSSynZLL3dYkpTcBrniiEtEGtsewKo.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969022/SaveClip.App_AQOsWxJzJWig-QK7cfWpYlvgtW7fyS3Qv-hg_qfyNObDZg7QuQJ_Fw7DxdCl7koqlmWgpSjtrSHhoILDLGj8WMXL8lzwQuxZDZYl7Cw.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969022/SaveClip.App_AQOxvcYCORwBZsFmp1RsGEokqgOE5b6IxrB0n4kV0R5i49qCNW5YLcWZ0LDLLQW3MLF9bov9Z6J3KQANRu0FnioiL94K72fvqdeBI_c.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969020/SaveClip.App_AQOXW2B9OkJLCfq2nSQ_z5QWpHzqqNpJEI3qOnfkqV7VvSoVhINd2mcPUQLetIksYe13Z0Nfkn2b8KCVuTe_YnCvIpO0tYoBs5f-Liw.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969017/SaveClip.App_AQOM5VWm3ayiHhoAQnNsAMnTuzSDr-9HL5E3-78uK-MR6XKO_z4hTBG9UAhA9DOJoo4s01P3WvLiWy0UEK8yL4V8sS8EkzSjU-CqDmc.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969016/SaveClip.App_AQO7BI8EyVkcP8ilFMOV2j9NtPYDQqmxxsXsXjxIVVHQEcVecFVO6nHDZoiic71qrKrbnkwbiGcp7M1Qrs12ggbJUcKpEHcUZvfwbrg.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969015/SaveClip.App_AQOb63yN6iHADuHcunI8P-SRcdIa2-JkWmxUpbbHRa16DWh0oWTPFx4dA8_HlTuA-KFA2sMoa_j2i1ydSXT414wdClBvfz3gLthO0ds.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969012/SaveClip.App_AQOl-tjgk53CYOuAADy0exAfTn01GHtTIuxWnBjuHjrs3RjbOZjt6bwi6qC9t28itE2pF7IZmbmgKvxEDd6YJRVAvbPulFIX4KNkVm4.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969012/SaveClip.App_AQO54b0QJonVeUAbxxQM6XQ1BilzmJZRr5BtvSV7Y4K3UtOwZB5n-wAyLry3mjI2zOrgneDhomKyRKv3EWwT25QyhwVGbDh-w770kfE.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969009/SaveClip.App_AQOE41Ucd9AzXV0fK90SWZKPnABwG7g2TAmm7JonAB3mDAaXorO0y30-xkLR0_porCCmWk0T_8-VCgnzb0hm4FFOx_z7TIEvZ7TJRZk.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969008/SaveClip.App_AQOf6KSjvMWk2yb8kAXOIVQL9M8IFIyZDVUb4HiXDnf-tvhtwJepIMOs5vD3TqgSyBD8hozaTJ7MP3tMIW3nAsbr0N9_ilP9QaBAjPE.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969006/SaveClip.App_AQNR7rXKHPXUzN3MbV54QF9Y_c0YWmm6Mjcl8hZXHWjYdsnlaq4vMe_mN3OOKhjhXhNwltSC7DDcP_TirpN6Lc3B2B29-IcmBEhoj5o.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969001/SaveClip.App_AQNozNq9n4K31-FBwNKYR8FfeHklV4JXYkxu8WwZXN74Ss_UnpCcU2uSrIanbc1KX-jXEkfCzRtCd2osAJkbILYGaAYJ1roRioUkT1E.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786969000/SaveClip.App_AQO4pcHCEU5TTma9LP3qXXb1IFcciehp0eduYPoOXTyf0sLiLIaFZxsJ9BRTpv_JwacoLgHo0vVgGjijmeIVsAFJuAlTHmDYZIUTOd4.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786968999/SaveClip.App_AQNI-yT6jEDJjvWijiTJyQswXUoaAOUL12x4F90WCT87DOIoEm1mwO4E3RDrFEHoGQtIJwgeHbmBbOepa1lfj8i7z7xYf1SiAV3-6oI.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786968999/SaveClip.App_AQNs3jlwAeVnVoJCxFJ0sKahqR_0HhvwkNTSeQl4SAVua4YU_l9-kMA2x5A9KnzSVtnZyKUxdaxeTLEzJQK86kCEw4hxma-3ql5up6M.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786968996/SaveClip.App_AQO0J5r5QSHSa2vRYM62rF1mU2a6F3oWljsLXrmUaFxIhuylhoUn0WxXf49xZP6wSr3lpfhIPvWjKmNMjhKwvW_8z_ASZLpn4O6WpM4.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786968992/SaveClip.App_AQN4TA1eXwrvTOe_jNHKV6nLXPAudPc6_5VH4MAgG7iIH3PAM4Fl10kYDDpfU4iet7SB_ZePBaOveTpAyQSsWgIh_A2nYgtVHlTZp80.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786968992/SaveClip.App_AQN8FcxM7pcj0SJTZUiA-456ehNy-SMjcb5cXWEgeHmFU1ZUQfH205ZTshsjzl1wlxx3Caqv2rEd46PfBkbGLYGNWfwdsrCYoudigDw.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786968991/SaveClip.App_AQMZhPq4NQIq0DcEE55PxZJPUgIP6gW-l0JTWNvk7vwTmXLgjO8tncAekxKHlCMZTuBgNu1ED-94dqFVJkVzXtdPtneWEwB82htUN10.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786968990/SaveClip.App_AQMIqLXTQgQ1980M_7ebFy5QYOj5yK6gQVAOur1z_kDVypOcZnLgaMMUp1SU3QqdW6wokaB94pT_0eh-Yfsb4dPT3Z_BgkLpSuQSyDE.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786968990/SaveClip.App_AQNlQFmm48H6ppzbgNdxKtOlaoRre-2TESg0OOz6Y5kNtuWKi8LKwYiur-e3a8urfr3x4EL7WGOxyKlZOIqqM5rMH_n8uUy1t1Aa1Go.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786968987/SaveClip.App_AQNlQFmm48H6ppzbgNdxKtOlaoRre-2TESg0OOz6Y5kNtuWKi8LKwYiur-e3a8urfr3x4EL7WGOxyKlZOIqqM5rMH_n8uUy1t1Aa1Go_1.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786968985/SaveClip.App_AQNlNvrGQ6qXO0x4jTOoOLG5QGlaPEXvDwrQPcwRA8UWlwsgn9R7hFtLhQMX1zNboI-Qg711ddzR9zOzMVMUZasxcmV3CVYeZQpws2o.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786968980/SaveClip.App_AQMbSxX2sSS2tDnRs9zCI_DQk-BS3Q6BWlkxgnSQxEueB9ThlgWoxNmLkRJAGyCtdVNKTqVCVkoYEs847m1-JiZxbUQwGhxJvOeW2kM_1.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786968979/SaveClip.App_AQMbSxX2sSS2tDnRs9zCI_DQk-BS3Q6BWlkxgnSQxEueB9ThlgWoxNmLkRJAGyCtdVNKTqVCVkoYEs847m1-JiZxbUQwGhxJvOeW2kM.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786968968/SaveClip.App_AQN3XSWyusrD0IhMSrCkZLJFMnV5n7NfaONtXEjONBYp4BJ7tHZINRPLRqGdjX-zCA9ysotfH1sd5OtVI5g-9xXlNqgDsW6oWKhRZ7U.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786968967/SaveClip.App_AQMryDQznGyUrLT4Ng3ymbFRogOEBOfavAsx9Tb_LD_cO6GoafRg3BsEwQzFdm_QeJgBQDakI-bLFf4jnGyFMILixwOao97nSlZWuWI.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786968965/SaveClip.App_AQMZ33mDRH0XJQE1GUMRyNkuF1laLEvnW91Ng7L3QdWlmdGyfHoOAoWFjdxIseJ6WYJ-4y0KvR762DMaWw-BDHPrRoMBMX7f-_OaPcI.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786968958/SaveClip.App_AQMS-ngqCBWm0xhD_l-qvHIpO6IvxLoc7-Saq0GnnuPUNht_Y1-YDf5SHi829WPfMOmoFAYqE_hRkcC3fbd6mpxH-qegTGKDjbBZDIM.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786968957/SaveClip.App_AQMdrTk5n1Z0zyEqVfpo1CnqnMYC8bDeowZ3lRNYvKwGXJjrssg7uwHM09DbeBPsz_hPr8UeNn695YQsn_LC9Df4wmZFJIQ2haIpAtA.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786968953/SaveClip.App_AQM4GIG-8DzBqYASGrM7WT-uGNiNNU7nS3-A0n634Iqil-XKj68XonrFwzu8mQTQGPRgs3t-5D2wIfxeF7GGwmvDq4NTZQ3qJnXYPOo.mp4",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786968950/SaveClip.App_576082758_18326003500214616_8329559967452383246_n.jpg",
  "https://res.cloudinary.com/c5fygt8y/image/upload/v1786968950/SaveClip.App_561357671_18085300844506670_5987323367091753437_n.jpg",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786862178/Comp_1.mp4",
  "https://res.cloudinary.com/c5fygt8y/video/upload/v1786862167/Reel.mp4"
];

const PRODUCT_SHOOT_SUBFOLDERS = [
  {
    id: 'jewellery',
    name: 'JEWELLERY',
    cover: PRODUCT_SHOOT_JEWELLERY_URLS[0],
    description: 'Gold, diamond & luxury statement jewellery shoots.'
  },
  {
    id: 'watches',
    name: 'WATCHES',
    cover: PRODUCT_SHOOT_WATCH_URLS[0],
    description: 'Premium timepieces and wristwatch photography.'
  },
  {
    id: 'shoes',
    name: 'SHOES',
    cover: PRODUCT_SHOOT_SHOES_URLS[0],
    description: 'Footwear, sneakers, and leather shoe product shots.'
  },
  {
    id: 'fashion-pouches',
    name: 'FASHION & POUCHES',
    cover: PRODUCT_SHOOT_PUSHEN_URLS[0],
    description: 'Trendsetting fashion accessories & pouches.'
  },
  {
    id: 'kitchen',
    name: 'KITCHENWARE',
    cover: PRODUCT_SHOOT_KITCHEN_URLS[0],
    description: 'Modern kitchenware, cookware & dining products.'
  },
  {
    id: 'belts',
    name: 'BELTS',
    cover: PRODUCT_SHOOT_BELT_URLS[0],
    description: 'Premium leather belts & waist accessories.'
  },
  {
    id: 'cosmetics',
    name: 'COSMETICS',
    cover: PRODUCT_SHOOT_COSMETIC_URLS[0],
    description: 'Skincare, makeup, and beauty product shots.'
  },
  {
    id: 'goggles',
    name: 'GOGGLES & EYEWEAR',
    cover: PRODUCT_SHOOT_GOGGLES_URLS[0],
    description: 'Sunglasses, spectacles and stylish eyewear.'
  },
  {
    id: 'wallets',
    name: 'WALLETS',
    cover: PRODUCT_SHOOT_WALLET_URLS[0],
    description: 'Genuine leather wallets & pocket accessories.'
  },
  {
    id: 'bags',
    name: 'BAGS',
    cover: PRODUCT_SHOOT_BAGS_URLS[0],
    description: 'Handbags, backpacks & travel luggage photography.'
  },
  {
    id: 'festival',
    name: 'FESTIVAL',
    cover: PRODUCT_SHOOT_FESTIVAL_URLS[0],
    description: 'Festive season products, gifts & holiday themes.'
  },
  {
    id: 'white-background',
    name: 'WHITE BACKGROUND',
    cover: PRODUCT_SHOOT_WHITE_BG_URLS[0],
    description: 'Studio product shots on clean white backdrop.'
  },
  {
    id: 'clothes',
    name: 'CLOTHES',
    cover: PRODUCT_SHOOT_CLOTHS_URLS[0],
    description: 'Apparel, garments & styled clothing photography.'
  }
];

const PRODUCT_SHOOT_GALLERY = [
  ...PRODUCT_SHOOT_JEWELLERY_URLS.map((url, i) => ({ id: `jewellery-${i}`, type: 'image', subfolder: 'jewellery', url })),
  ...PRODUCT_SHOOT_WATCH_URLS.map((url, i) => ({ id: `watches-${i}`, type: 'image', subfolder: 'watches', url })),
  ...PRODUCT_SHOOT_SHOES_URLS.map((url, i) => ({ id: `shoes-${i}`, type: 'image', subfolder: 'shoes', url })),
  ...PRODUCT_SHOOT_PUSHEN_URLS.map((url, i) => ({ id: `fashion-pouches-${i}`, type: 'image', subfolder: 'fashion-pouches', url })),
  ...PRODUCT_SHOOT_KITCHEN_URLS.map((url, i) => ({ id: `kitchen-${i}`, type: 'image', subfolder: 'kitchen', url })),
  ...PRODUCT_SHOOT_BELT_URLS.map((url, i) => ({ id: `belts-${i}`, type: 'image', subfolder: 'belts', url })),
  ...PRODUCT_SHOOT_COSMETIC_URLS.map((url, i) => ({ id: `cosmetics-${i}`, type: 'image', subfolder: 'cosmetics', url })),
  ...PRODUCT_SHOOT_GOGGLES_URLS.map((url, i) => ({ id: `goggles-${i}`, type: 'image', subfolder: 'goggles', url })),
  ...PRODUCT_SHOOT_WALLET_URLS.map((url, i) => ({ id: `wallets-${i}`, type: 'image', subfolder: 'wallets', url })),
  ...PRODUCT_SHOOT_BAGS_URLS.map((url, i) => ({ id: `bags-${i}`, type: 'image', subfolder: 'bags', url })),
  ...PRODUCT_SHOOT_FESTIVAL_URLS.map((url, i) => ({ id: `festival-${i}`, type: 'image', subfolder: 'festival', url })),
  ...PRODUCT_SHOOT_WHITE_BG_URLS.map((url, i) => ({ id: `white-background-${i}`, type: 'image', subfolder: 'white-background', url })),
  ...PRODUCT_SHOOT_CLOTHS_URLS.map((url, i) => ({ id: `clothes-${i}`, type: 'image', subfolder: 'clothes', url }))
];

// WORK CATEGORIES MATCHING EXACT USER REQUIREMENTS
const WORK_CATEGORIES = [
  {
    id: 'fashion-product-video',
    title: 'FASHION PRODUCT VIDEO',
    icon: Sparkles,
    coverImage: FASHION_PRODUCT_VIDEO_URLS[0].replace(/\.mp4$/i, '.jpg'),
    coverVideo: FASHION_PRODUCT_VIDEO_URLS[0],
    description: 'High-fashion editorial films, commercial product videos, and trendsetting style stories.',
    gallery: FASHION_PRODUCT_VIDEO_URLS.map((url, index) => ({
      id: index + 1,
      type: 'video',
      url: url,
      cover: url.replace(/\.mp4$/i, '.jpg')
    }))
  },
  {
    id: 'product-shoot',
    title: 'PRODUCT SHOOT',
    icon: Box,
    coverImage: PRODUCT_SHOOT_JEWELLERY_URLS[0],
    description: 'Clean, detailed and impactful product visuals categorized into dedicated product collections.',
    subfolders: PRODUCT_SHOOT_SUBFOLDERS,
    gallery: PRODUCT_SHOOT_GALLERY
  },
  {
    id: 'event-video',
    title: 'EVENT VIDEO',
    icon: Video,
    coverImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80',
    description: 'High-energy live event coverage, festival highlights, and commercial video stories.',
    gallery: [
      { id: 1, type: 'video', url: 'https://assets.mixkit.co/videos/preview/mixkit-videographer-filming-a-model-in-a-studio-41477-large.mp4', cover: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80' },
      { id: 2, type: 'video', url: 'https://assets.mixkit.co/videos/preview/mixkit-camera-filming-a-sunset-landscape-40898-large.mp4', cover: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80' },
      { id: 3, type: 'video', url: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-camera-recording-a-landscape-40897-large.mp4', cover: 'https://images.unsplash.com/photo-1512790182412-b19e6d614397?auto=format&fit=crop&w=1200&q=80' }
    ]
  },
  {
    id: 'model-photoshoot',
    title: 'MODEL PHOTOSHOOT',
    icon: User,
    coverImage: MODEL_PHOTOSHOOT_URLS[0],
    description: 'Striking portraits and editorial shots that define style and personality.',
    gallery: MODEL_PHOTOSHOOT_URLS.map((url, index) => ({
      id: index + 1,
      type: 'image',
      url: url
    }))
  },
  {
    id: 'random-work',
    title: 'RANDOM WORK',
    icon: Layers,
    coverImage: RANDOM_WORK_URLS[0].includes('/video/upload/') ? RANDOM_WORK_URLS[0].replace(/\.mp4$/i, '.jpg') : RANDOM_WORK_URLS[0],
    coverVideo: RANDOM_WORK_URLS[0].includes('/video/upload/') ? RANDOM_WORK_URLS[0] : null,
    description: 'A creative mix of spontaneous moments, travel captures, and experimental visual projects.',
    gallery: RANDOM_WORK_URLS.map((url, index) => {
      const isVideo = url.includes('/video/upload/') || url.endsWith('.mp4');
      return {
        id: index + 1,
        type: isVideo ? 'video' : 'image',
        url: url,
        cover: isVideo ? url.replace(/\.mp4$/i, '.jpg') : url
      };
    })
  }
];

export default function MyWorkSection() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(null);
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);
  const [selectedSubfolder, setSelectedSubfolder] = useState(null);

  // Filtered gallery items based on activeCategory and selectedSubfolder
  const displayedGallery = activeCategory?.subfolders && selectedSubfolder !== null
    ? activeCategory.gallery.filter((item) => item.subfolder === selectedSubfolder)
    : (activeCategory?.gallery || []);

  // Active media item derived from activeCategory and activeMediaIndex
  const activeMedia = activeCategory && activeMediaIndex !== null ? displayedGallery[activeMediaIndex] : null;

  // Strict Lock background page scroll and remove scrollbars when modal/lightbox is active
  useEffect(() => {
    if (activeCategory || activeMediaIndex !== null) {
      document.documentElement.classList.add('no-scroll');
      document.body.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.documentElement.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll');
    };
  }, [activeCategory, activeMediaIndex]);

  // Handle Browser / Mobile Hardware Back Button support
  useEffect(() => {
    if (activeCategory) {
      window.history.pushState({ modal: 'gallery', id: activeCategory.id }, '', `#gallery-${activeCategory.id}`);
      
      const handlePopState = () => {
        if (activeMediaIndex !== null) {
          setActiveMediaIndex(null);
        } else if (selectedSubfolder !== null) {
          setSelectedSubfolder(null);
        } else {
          setActiveCategory(null);
          // Restore exact scroll position
          setTimeout(() => {
            window.scrollTo({ top: savedScrollPosition, behavior: 'instant' });
          }, 10);
        }
      };

      window.addEventListener('popstate', handlePopState);

      return () => {
        window.removeEventListener('popstate', handlePopState);
      };
    }
  }, [activeCategory, activeMediaIndex, selectedSubfolder, savedScrollPosition]);

  // Keyboard left/right and Escape support for Fullscreen Lightbox & Modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeCategory) return;
      if (activeMediaIndex !== null) {
        if (e.key === 'ArrowLeft') handlePrevMedia();
        else if (e.key === 'ArrowRight') handleNextMedia();
        else if (e.key === 'Escape') setActiveMediaIndex(null);
      } else if (selectedSubfolder !== null) {
        if (e.key === 'Escape') setSelectedSubfolder(null);
      } else {
        if (e.key === 'Escape') handleCloseCategory();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCategory, activeMediaIndex, selectedSubfolder]);

  // Open category modal and save current scroll position
  const handleOpenCategory = (category) => {
    setSavedScrollPosition(window.scrollY);
    setActiveCategory(category);
    setSelectedSubfolder(null);
    setActiveMediaIndex(null);
  };

  // Close category modal and restore scroll position
  const handleCloseCategory = () => {
    setActiveCategory(null);
    setSelectedSubfolder(null);
    setActiveMediaIndex(null);

    if (window.location.hash.startsWith('#gallery-')) {
      window.history.back();
    }

    setTimeout(() => {
      window.scrollTo({ top: savedScrollPosition, behavior: 'instant' });
    }, 10);
  };

  const handlePrevMedia = () => {
    if (!activeCategory) return;
    setActiveMediaIndex((prev) => (prev === 0 ? displayedGallery.length - 1 : prev - 1));
  };

  const handleNextMedia = () => {
    if (!activeCategory) return;
    setActiveMediaIndex((prev) => (prev === displayedGallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="work" className="pt-10 sm:pt-14 pb-20 sm:pb-28 bg-[#000000] text-slate-100 relative overflow-hidden select-none">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#cfa856]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* FULL SCREEN WIDTH CONTAINER */}
      <div className="w-full px-5 sm:px-10 lg:px-14 xl:px-16 2xl:px-24 3xl:px-32 relative z-10">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal className="text-center max-w-3xl 2xl:max-w-5xl mx-auto mb-10 sm:mb-12 2xl:mb-16 space-y-2.5 2xl:space-y-4">
          
          {/* Top Label */}
          <div className="text-[11px] 2xl:text-sm font-mono tracking-[0.3em] text-[#cfa856] uppercase font-bold">
            MY WORK
          </div>

          {/* Headline: WHAT I SEE. WHAT I FEEL. */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl font-sans font-black tracking-tight text-white uppercase leading-tight max-w-4xl mx-auto">
            WHAT I SEE.&nbsp;
            <span className="text-[#cfa856]">WHAT I FEEL.</span>
          </h2>

          {/* Underline Accent */}
          <div className="w-12 2xl:w-16 h-[2px] 2xl:h-[3px] bg-[#cfa856] mx-auto my-2 2xl:my-4" />

          {/* Subtitle Paragraph */}
          <p className="text-slate-300 text-xs sm:text-sm 2xl:text-lg font-normal leading-relaxed max-w-2xl 2xl:max-w-3xl mx-auto pt-0.5">
            Turning real moments into memories through my lens.
          </p>

        </ScrollReveal>

        {/* 5 Column Wide Grid across Full Screen Width with ScrollReveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 xl:gap-7 2xl:gap-9">
          {WORK_CATEGORIES.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <ScrollReveal key={category.id} delay={index * 100}>
                <div
                  onClick={() => handleOpenCategory(category)}
                  className="group cursor-pointer rounded-2xl bg-[#0a0a0c] border border-white/10 hover:border-[#cfa856]/70 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between overflow-hidden shadow-2xl hover:shadow-[#cfa856]/15 h-full"
                >
                  <div>
                    {/* Top Image Box with Wider Aspect Ratio */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                      {category.coverVideo ? (
                        <video
                          src={category.coverVideo}
                          poster={category.coverImage}
                          className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                          muted
                          loop
                          playsInline
                          onMouseOver={(e) => e.target.play()}
                          onMouseOut={(e) => e.target.pause()}
                        />
                      ) : (
                        <img
                          src={category.coverImage}
                          alt={category.title}
                          className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                        />
                      )}
                      
                      {/* Dark Bottom Gradient Fade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-90" />

                      {/* Circular Icon Badge overlapping image bottom-left */}
                      <div className="absolute bottom-3 left-4 z-10 w-11 h-11 rounded-full bg-black/80 border border-[#cfa856]/60 backdrop-blur-md flex items-center justify-center text-[#cfa856] group-hover:bg-[#cfa856] group-hover:text-black transition-all shadow-lg">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Card Body Content */}
                    <div className="p-5 2xl:p-7 pt-3 2xl:pt-4 space-y-2 2xl:space-y-3">
                      <h3 className="font-sans font-black tracking-wider text-white group-hover:text-[#cfa856] transition-colors text-base sm:text-lg 2xl:text-2xl uppercase leading-snug">
                        {category.title}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm 2xl:text-lg leading-relaxed line-clamp-3 font-normal">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* VIEW WORK Footer Link */}
                  <div className="p-5 2xl:p-7 pt-0">
                    <div className="text-xs 2xl:text-base font-bold font-mono text-[#cfa856] uppercase tracking-widest flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                      <span>VIEW WORK</span>
                      <ArrowRight className="w-4 h-4 2xl:w-5 2xl:h-5" />
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>

      {/* FULL GALLERY MODAL - FULL WIDTH & CLEAN MEDIA */}
      {activeCategory && (
        <div className={`fixed inset-0 z-50 bg-black/98 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto animate-fadeIn ${activeMediaIndex !== null ? 'overflow-hidden' : ''}`}>
          
          {/* Header Bar */}
          <div className="sticky top-0 z-20 bg-black/95 backdrop-blur-md border-b border-white/10 px-6 sm:px-12 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {activeCategory.subfolders && selectedSubfolder !== null ? (
                <button
                  onClick={() => setSelectedSubfolder(null)}
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#cfa856] hover:text-black text-[#cfa856] text-xs font-mono font-bold tracking-widest uppercase transition-all border border-[#cfa856]/40 shadow-lg group"
                >
                  <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                  <span>BACK TO FOLDERS</span>
                </button>
              ) : (
                <button
                  onClick={handleCloseCategory}
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#cfa856] hover:text-black text-[#cfa856] text-xs font-mono font-bold tracking-widest uppercase transition-all border border-[#cfa856]/40 shadow-lg group"
                >
                  <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                  <span>BACK TO WORK</span>
                </button>
              )}
            </div>

            <div className="text-[#cfa856] font-mono font-bold text-xs sm:text-sm tracking-widest uppercase flex items-center gap-2">
              <span>{activeCategory.title}</span>
              {selectedSubfolder !== null && (
                <>
                  <span className="text-slate-500">•</span>
                  <span className="text-white">
                    {activeCategory.subfolders?.find((f) => f.id === selectedSubfolder)?.name}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Main Body Content */}
          <div className="w-full px-4 sm:px-8 lg:px-12 py-8 flex-1">
            
            {/* SUBFOLDERS CARDS GRID (IF CATEGORY HAS SUBFOLDERS AND NO SUBFOLDER IS SELECTED) */}
            {activeCategory.subfolders && selectedSubfolder === null ? (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-2xl font-sans font-black text-white uppercase tracking-wider">
                    SELECT A PRODUCT FOLDER
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-sans mt-1">
                    Explore product shoots categorized into dedicated folders.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {activeCategory.subfolders.map((folder) => (
                    <div
                      key={folder.id}
                        onClick={() => setSelectedSubfolder(folder.id)}
                        className="group relative rounded-2xl overflow-hidden bg-[#0d0d10] border border-white/10 hover:border-[#cfa856] cursor-pointer transition-all duration-300 transform hover:-translate-y-2 shadow-2xl flex flex-col justify-between"
                      >
                        {/* Folder Cover Image Box */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                          <img
                            src={folder.cover}
                            alt={folder.name}
                            className="w-full h-full object-cover filter brightness-85 group-hover:brightness-100 group-hover:scale-110 transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] via-transparent to-transparent opacity-90" />
                        </div>

                        {/* Folder Title & Details */}
                        <div className="p-5 space-y-1.5">
                          <div className="flex items-center justify-between">
                            <h4 className="font-mono font-bold text-base text-white group-hover:text-[#cfa856] transition-colors uppercase tracking-wider">
                              {folder.name}
                            </h4>
                            <ArrowRight className="w-4 h-4 text-[#cfa856] transform group-hover:translate-x-1 transition-transform" />
                          </div>
                          <p className="text-slate-400 text-xs font-sans leading-relaxed line-clamp-2">
                            {folder.description}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              /* IMAGES / VIDEOS GALLERY GRID */
              displayedGallery.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
                  {displayedGallery.map((item, index) => (
                    <div
                      key={item.id}
                      onClick={() => setActiveMediaIndex(index)}
                      className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 hover:border-[#cfa856] cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5 shadow-2xl"
                    >
                      {item.type === 'video' ? (
                        <div className="relative w-full h-full">
                          <video
                            src={item.url}
                            poster={item.cover}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            onMouseOver={(e) => e.target.play()}
                            onMouseOut={(e) => e.target.pause()}
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center pointer-events-none">
                            <div className="w-10 h-10 rounded-full bg-black/60 border border-[#cfa856]/60 backdrop-blur-md flex items-center justify-center text-[#cfa856] group-hover:scale-110 group-hover:bg-[#cfa856] group-hover:text-black transition-all shadow-lg">
                              <Play className="w-4 h-4 fill-current ml-0.5" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={item.url}
                          alt={item.title || "Portfolio Gallery Item"}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      {item.title && (
                        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-[11px] font-mono text-[#cfa856] font-bold uppercase tracking-wider">
                            {item.title}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-[#cfa856]/30 flex items-center justify-center text-[#cfa856]">
                    <Folder className="w-8 h-8 opacity-60" />
                  </div>
                  <h4 className="text-white font-mono font-bold text-lg uppercase tracking-wider">
                    FOLDER EMPTY
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm max-w-md font-sans">
                    No images added to this subfolder yet. Share your links to populate this folder!
                  </p>
                </div>
              )
            )}
          </div>

          {/* Modal Footer */}
          <div className="border-t border-white/10 bg-black/80 px-6 sm:px-12 py-4 text-center text-xs text-slate-400 font-mono">
            GAUTAM KUMAR PORTFOLIO &nbsp;•&nbsp; {activeCategory.title}
          </div>

        </div>
      )}

      {/* FULLSCREEN LIGHTBOX WITH PREVIOUS (<), NEXT (>), AND CLOSE (X) */}
      {activeMedia && (
        <div className="fixed inset-0 z-50 bg-black/98 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn select-none overflow-hidden">
          
          {/* Top Right Close Button (X) */}
          <button
            onClick={() => setActiveMediaIndex(null)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-[#cfa856] hover:text-black text-white transition-all border border-white/10 shadow-2xl"
            title="Close Lightbox (Esc)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Previous Arrow Button (<) */}
          {displayedGallery.length > 1 && (
            <button
              onClick={handlePrevMedia}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3.5 sm:p-4 rounded-full bg-black/70 hover:bg-[#cfa856] hover:text-black text-white transition-all border border-white/20 shadow-2xl backdrop-blur-md transform hover:scale-110 active:scale-95"
              title="Previous (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          )}

          {/* Right Next Arrow Button (>) */}
          {displayedGallery.length > 1 && (
            <button
              onClick={handleNextMedia}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3.5 sm:p-4 rounded-full bg-black/70 hover:bg-[#cfa856] hover:text-black text-[#cfa856] transition-all border border-white/20 shadow-2xl backdrop-blur-md transform hover:scale-110 active:scale-95"
              title="Next (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          )}

          {/* Center Media Display - HD Widescreen Video Size */}
          <div className="w-full max-w-5xl max-h-[85vh] flex flex-col items-center justify-center relative">
            {activeMedia.type === 'video' ? (
              <video
                key={activeMedia.id}
                src={activeMedia.url}
                poster={activeMedia.cover}
                controls
                autoPlay
                className="w-full h-auto aspect-video max-h-[80vh] rounded-2xl shadow-2xl border border-white/10 object-contain bg-black"
              />
            ) : (
              <img
                key={activeMedia.id}
                src={activeMedia.url}
                alt={activeMedia.title || "Portfolio Item"}
                className="max-h-[80vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
              />
            )}

            {/* Counter indicator */}
            <div className="absolute -bottom-8 text-xs font-mono text-slate-400 tracking-widest uppercase">
              {activeMediaIndex + 1} / {displayedGallery.length}
            </div>
          </div>

        </div>
      )}

    </section>
  );
}
