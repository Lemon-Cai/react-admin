// const IMG_BASE_URL = 'https://gitee.com/jia_hongxing/emoji-editor-image/raw/master/'
// 表情图片url地址
// const IMG_BASE_URL = 'https://react-emotor.oss-cn-beijing.aliyuncs.com/'
// 压缩表情图片url地址
const IMG_BASE_URL = 'https://react-emotor.oss-cn-beijing.aliyuncs.com/zipImage/'

const imgName = [
  {
    type: 'people',
    imgNameStr:
      'grinning-face_1f600.png,smiling-face-with-open-mouth_1f603.png,smiling-face-with-open-mouth-and-smiling-eyes_1f604.png,grinning-face-with-smiling-eyes_1f601.png,smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png,smiling-face-with-open-mouth-and-cold-sweat_1f605.png,rolling-on-the-floor-laughing_1f923.png,face-with-tears-of-joy_1f602.png,slightly-smiling-face_1f642.png,upside-down-face_1f643.png,winking-face_1f609.png,smiling-face-with-smiling-eyes_1f60a.png,smiling-face-with-halo_1f607.png,smiling-face-with-heart-shaped-eyes_1f60d.png,grinning-face-with-star-eyes_1f929.png,face-throwing-a-kiss_1f618.png,kissing-face_1f617.png,kissing-face-with-closed-eyes_1f61a.png,kissing-face-with-smiling-eyes_1f619.png,face-savouring-delicious-food_1f60b.png,face-with-stuck-out-tongue_1f61b.png,face-with-stuck-out-tongue-and-winking-eye_1f61c.png,grinning-face-with-one-large-and-one-small-eye_1f92a.png,face-with-stuck-out-tongue-and-tightly-closed-eyes_1f61d.png,money-mouth-face_1f911.png,hugging-face_1f917.png,smiling-face-with-smiling-eyes-and-hand-covering-mouth_1f92d.png,face-with-finger-covering-closed-lips_1f92b.png,thinking-face_1f914.png,zipper-mouth-face_1f910.png,face-with-one-eyebrow-raised_1f928.png,neutral-face_1f610.png,expressionless-face_1f611.png,face-without-mouth_1f636.png,smirking-face_1f60f.png,unamused-face_1f612.png,face-with-rolling-eyes_1f644.png,grimacing-face_1f62c.png,lying-face_1f925.png,relieved-face_1f60c.png,pensive-face_1f614.png,sleepy-face_1f62a.png,drooling-face_1f924.png,sleeping-face_1f634.png,face-with-medical-mask_1f637.png,face-with-thermometer_1f912.png,face-with-head-bandage_1f915.png,nauseated-face_1f922.png,face-with-open-mouth-vomiting_1f92e.png,sneezing-face_1f927.png,dizzy-face_1f635.png,shocked-face-with-exploding-head_1f92f.png,face-with-cowboy-hat_1f920.png,smiling-face-with-sunglasses_1f60e.png,nerd-face_1f913.png,face-with-monocle_1f9d0.png,confused-face_1f615.png,worried-face_1f61f.png,slightly-frowning-face_1f641.png,face-with-open-mouth_1f62e.png,hushed-face_1f62f.png,astonished-face_1f632.png,flushed-face_1f633.png,frowning-face-with-open-mouth_1f626.png,anguished-face_1f627.png,fearful-face_1f628.png,face-with-open-mouth-and-cold-sweat_1f630.png,disappointed-but-relieved-face_1f625.png,crying-face_1f622.png,loudly-crying-face_1f62d.png,face-screaming-in-fear_1f631.png,confounded-face_1f616.png,persevering-face_1f623.png,disappointed-face_1f61e.png,face-with-cold-sweat_1f613.png,weary-face_1f629.png,tired-face_1f62b.png,face-with-look-of-triumph_1f624.png,pouting-face_1f621.png,angry-face_1f620.png,serious-face-with-symbols-covering-mouth_1f92c.png,smiling-face-with-horns_1f608.png,imp_1f47f.png,skull_1f480.png,clown-face_1f921.png,japanese-ogre_1f479.png,japanese-goblin_1f47a.png,ghost_1f47b.png,extraterrestrial-alien_1f47d.png,see-no-evil-monkey_1f648.png,hear-no-evil-monkey_1f649.png,speak-no-evil-monkey_1f64a.png,kiss-mark_1f48b.png,love-letter_1f48c.png,heart-with-arrow_1f498.png,heart-with-ribbon_1f49d.png,sparkling-heart_1f496.png,growing-heart_1f497.png,beating-heart_1f493.png,revolving-hearts_1f49e.png,two-hearts_1f495.png,broken-heart_1f494.png,orange-heart_1f9e1.png,yellow-heart_1f49b.png,green-heart_1f49a.png,blue-heart_1f499.png,purple-heart_1f49c.png,black-heart_1f5a4.png,speech-balloon_1f4ac.png,selfie_1f933.png,nose_1f443.png,tongue_1f445.png,mouth_1f444.png,baby_1f476.png,child_1f9d2.png,boy_1f466.png,girl_1f467.png,man_1f468.png,woman_1f469.png,older-man_1f474.png,older-woman_1f475.png,person-frowning_1f64d.png,person-with-pouting-face_1f64e.png,face-with-no-good-gesture_1f645.png,face-with-ok-gesture_1f646.png,information-desk-person_1f481.png,happy-person-raising-one-hand_1f64b.png,person-bowing-deeply_1f647.png,face-palm_1f926.png,shrug_1f937.png,police-officer_1f46e.png,guardsman_1f482.png,construction-worker_1f477.png,prince_1f934.png,princess_1f478.png,man-with-turban_1f473.png,person-with-headscarf_1f9d5.png,pregnant-woman_1f930.png,breast-feeding_1f931.png,baby-angel_1f47c.png,father-christmas_1f385.png,mother-christmas_1f936.png,mage_1f9d9.png,fairy_1f9da.png,vampire_1f9db.png,merperson_1f9dc.png,elf_1f9dd.png,genie_1f9de.png,zombie_1f9df.png,face-massage_1f486.png,haircut_1f487.png,pedestrian_1f6b6.png,runner_1f3c3.png,dancer_1f483.png,man-dancing_1f57a.png,woman-with-bunny-ears_1f46f.png,person-in-steamy-room_1f9d6.png,person-climbing_1f9d7.png,person-in-lotus-position_1f9d8.png,kiss_1f48f.png,couple-with-heart_1f491.png,family_1f46a.png,bust-in-silhouette_1f464.png,busts-in-silhouette_1f465.png,snowman-without-snow_26c4.png,japanese-dolls_1f38e.png,moyai_1f5ff.png,bride-with-veil_1f470.png,man-in-tuxedo_1f935.png'
  },
  {
    type: 'goods',
    imgNameStr:
      'pile-of-poo_1f4a9.png,alien-monster_1f47e.png,thought-balloon_1f4ad.png,nail-polish_1f485.png,ear_1f442.png,brain_1f9e0.png,eyes_1f440.png,bath_1f6c0.png,sleeping-accommodation_1f6cc.png,footprints_1f463.png,spoon_1f944.png,hocho_1f52a.png,amphora_1f3fa.png,silhouette-of-japan_1f5fe.png,carousel-horse_1f3a0.png,ferris-wheel_1f3a1.png,roller-coaster_1f3a2.png,barber-pole_1f488.png,circus-tent_1f3aa.png,rocket_1f680.png,flying-saucer_1f6f8.png,hourglass_231b.png,hourglass-with-flowing-sand_23f3.png,watch_231a.png,alarm-clock_23f0.png,closed-umbrella_1f302.png,umbrella-with-rain-drops_2614.png,high-voltage-sign_26a1.png,jack-o-lantern_1f383.png,christmas-tree_1f384.png,fireworks_1f386.png,firework-sparkler_1f387.png,balloon_1f388.png,party-popper_1f389.png,confetti-ball_1f38a.png,carp-streamer_1f38f.png,wind-chime_1f390.png,moon-viewing-ceremony_1f391.png,ribbon_1f380.png,wrapped-present_1f381.png,ticket_1f3ab.png,crystal-ball_1f52e.png,video-game_1f3ae.png,slot-machine_1f3b0.png,playing-card-black-joker_1f0cf.png,flower-playing-cards_1f3b4.png,performing-arts_1f3ad.png,artist-palette_1f3a8.png,eyeglasses_1f453.png,necktie_1f454.png,t-shirt_1f455.png,jeans_1f456.png,scarf_1f9e3.png,gloves_1f9e4.png,coat_1f9e5.png,socks_1f9e6.png,dress_1f457.png,kimono_1f458.png,bikini_1f459.png,womans-clothes_1f45a.png,purse_1f45b.png,handbag_1f45c.png,pouch_1f45d.png,mans-shoe_1f45e.png,athletic-shoe_1f45f.png,high-heeled-shoe_1f460.png,womans-sandal_1f461.png,womans-boots_1f462.png,crown_1f451.png,womans-hat_1f452.png,top-hat_1f3a9.png,graduation-cap_1f393.png,billed-cap_1f9e2.png,prayer-beads_1f4ff.png,lipstick_1f484.png,ring_1f48d.png,gem-stone_1f48e.png,speaker-with-cancellation-stroke_1f507.png,speaker_1f508.png,speaker-with-one-sound-wave_1f509.png,speaker-with-three-sound-waves_1f50a.png,public-address-loudspeaker_1f4e2.png,cheering-megaphone_1f4e3.png,postal-horn_1f4ef.png,bell_1f514.png,bell-with-cancellation-stroke_1f515.png,musical-score_1f3bc.png,musical-note_1f3b5.png,multiple-musical-notes_1f3b6.png,microphone_1f3a4.png,headphone_1f3a7.png,radio_1f4fb.png,saxophone_1f3b7.png,guitar_1f3b8.png,musical-keyboard_1f3b9.png,trumpet_1f3ba.png,violin_1f3bb.png,drum-with-drumsticks_1f941.png,mobile-phone_1f4f1.png,mobile-phone-with-rightwards-arrow-at-left_1f4f2.png,telephone-receiver_1f4de.png,pager_1f4df.png,fax-machine_1f4e0.png,battery_1f50b.png,electric-plug_1f50c.png,minidisc_1f4bd.png,floppy-disk_1f4be.png,optical-disc_1f4bf.png,dvd_1f4c0.png,movie-camera_1f3a5.png,clapper-board_1f3ac.png,television_1f4fa.png,camera_1f4f7.png,camera-with-flash_1f4f8.png,video-camera_1f4f9.png,videocassette_1f4fc.png,left-pointing-magnifying-glass_1f50d.png,right-pointing-magnifying-glass_1f50e.png,electric-light-bulb_1f4a1.png,electric-torch_1f526.png,izakaya-lantern_1f3ee.png,notebook-with-decorative-cover_1f4d4.png,closed-book_1f4d5.png,open-book_1f4d6.png,green-book_1f4d7.png,blue-book_1f4d8.png,orange-book_1f4d9.png,books_1f4da.png,notebook_1f4d3.png,ledger_1f4d2.png,page-with-curl_1f4c3.png,scroll_1f4dc.png,page-facing-up_1f4c4.png,newspaper_1f4f0.png,bookmark-tabs_1f4d1.png,bookmark_1f516.png,money-bag_1f4b0.png,banknote-with-yen-sign_1f4b4.png,banknote-with-dollar-sign_1f4b5.png,banknote-with-euro-sign_1f4b6.png,banknote-with-pound-sign_1f4b7.png,money-with-wings_1f4b8.png,credit-card_1f4b3.png,e-mail-symbol_1f4e7.png,incoming-envelope_1f4e8.png,envelope-with-downwards-arrow-above_1f4e9.png,outbox-tray_1f4e4.png,inbox-tray_1f4e5.png,package_1f4e6.png,closed-mailbox-with-raised-flag_1f4eb.png,closed-mailbox-with-lowered-flag_1f4ea.png,open-mailbox-with-raised-flag_1f4ec.png,open-mailbox-with-lowered-flag_1f4ed.png,postbox_1f4ee.png,memo_1f4dd.png,briefcase_1f4bc.png,file-folder_1f4c1.png,open-file-folder_1f4c2.png,calendar_1f4c5.png,tear-off-calendar_1f4c6.png,card-index_1f4c7.png,chart-with-upwards-trend_1f4c8.png,chart-with-downwards-trend_1f4c9.png,bar-chart_1f4ca.png,clipboard_1f4cb.png,pushpin_1f4cc.png,round-pushpin_1f4cd.png,paperclip_1f4ce.png,straight-ruler_1f4cf.png,triangular-ruler_1f4d0.png,lock_1f512.png,open-lock_1f513.png,lock-with-ink-pen_1f50f.png,closed-lock-with-key_1f510.png,key_1f511.png,hammer_1f528.png,pistol_1f52b.png,wrench_1f527.png,nut-and-bolt_1f529.png,microscope_1f52c.png,telescope_1f52d.png,satellite-antenna_1f4e1.png,syringe_1f489.png,pill_1f48a.png,door_1f6aa.png,toilet_1f6bd.png,shower_1f6bf.png,bathtub_1f6c1.png,shopping-trolley_1f6d2.png,smoking-symbol_1f6ac.png,low-brightness-symbol_1f505.png,high-brightness-symbol_1f506.png,trident-emblem_1f531.png,name-badge_1f4db.png'
  },
  {
    type: 'animal',
    imgNameStr:
      'monkey-face_1f435.png,monkey_1f412.png,gorilla_1f98d.png,dog-face_1f436.png,dog_1f415.png,poodle_1f429.png,cat-face_1f431.png,cat_1f408.png,tiger-face_1f42f.png,tiger_1f405.png,leopard_1f406.png,horse-face_1f434.png,horse_1f40e.png,zebra-face_1f993.png,deer_1f98c.png,cow-face_1f42e.png,ox_1f402.png,water-buffalo_1f403.png,cow_1f404.png,pig-face_1f437.png,pig_1f416.png,boar_1f417.png,pig-nose_1f43d.png,ram_1f40f.png,sheep_1f411.png,goat_1f410.png,dromedary-camel_1f42a.png,bactrian-camel_1f42b.png,llama_1f999.png,giraffe-face_1f992.png,elephant_1f418.png,rhinoceros_1f98f.png,mouse-face_1f42d.png,mouse_1f401.png,rat_1f400.png,rabbit-face_1f430.png,rabbit_1f407.png,hedgehog_1f994.png,bat_1f987.png,koala_1f428.png,paw-prints_1f43e.png,turkey_1f983.png,chicken_1f414.png,rooster_1f413.png,hatching-chick_1f423.png,baby-chick_1f424.png,front-facing-baby-chick_1f425.png,bird_1f426.png,penguin_1f427.png,eagle_1f985.png,duck_1f986.png,owl_1f989.png,crocodile_1f40a.png,turtle_1f422.png,lizard_1f98e.png,snake_1f40d.png,dragon-face_1f432.png,dragon_1f409.png,sauropod_1f995.png,t-rex_1f996.png,spouting-whale_1f433.png,whale_1f40b.png,dolphin_1f42c.png,fish_1f41f.png,tropical-fish_1f420.png,blowfish_1f421.png,shark_1f988.png,octopus_1f419.png,spiral-shell_1f41a.png,snail_1f40c.png,butterfly_1f98b.png,bug_1f41b.png,ant_1f41c.png,honeybee_1f41d.png,lady-beetle_1f41e.png,cricket_1f997.png,scorpion_1f982.png,crab_1f980.png,shrimp_1f990.png,squid_1f991.png,teddy-bear_1f9f8.png'
  },
  {
    type: 'food',
    imgNameStr:
      'grapes_1f347.png,melon_1f348.png,watermelon_1f349.png,tangerine_1f34a.png,lemon_1f34b.png,banana_1f34c.png,pineapple_1f34d.png,red-apple_1f34e.png,green-apple_1f34f.png,pear_1f350.png,peach_1f351.png,cherries_1f352.png,strawberry_1f353.png,kiwifruit_1f95d.png,tomato_1f345.png,coconut_1f965.png,avocado_1f951.png,aubergine_1f346.png,potato_1f954.png,carrot_1f955.png,ear-of-maize_1f33d.png,cucumber_1f952.png,broccoli_1f966.png,peanuts_1f95c.png,bread_1f35e.png,croissant_1f950.png,baguette-bread_1f956.png,pretzel_1f968.png,pancakes_1f95e.png,cheese-wedge_1f9c0.png,meat-on-bone_1f356.png,poultry-leg_1f357.png,cut-of-meat_1f969.png,bacon_1f953.png,hamburger_1f354.png,french-fries_1f35f.png,slice-of-pizza_1f355.png,hot-dog_1f32d.png,sandwich_1f96a.png,taco_1f32e.png,burrito_1f32f.png,stuffed-flatbread_1f959.png,egg_1f95a.png,cooking_1f373.png,shallow-pan-of-food_1f958.png,pot-of-food_1f372.png,bowl-with-spoon_1f963.png,green-salad_1f957.png,popcorn_1f37f.png,canned-food_1f96b.png,bento-box_1f371.png,rice-cracker_1f358.png,rice-ball_1f359.png,cooked-rice_1f35a.png,curry-and-rice_1f35b.png,steaming-bowl_1f35c.png,spaghetti_1f35d.png,roasted-sweet-potato_1f360.png,oden_1f362.png,sushi_1f363.png,fried-shrimp_1f364.png,fish-cake-with-swirl-design_1f365.png,dango_1f361.png,dumpling_1f95f.png,fortune-cookie_1f960.png,takeout-box_1f961.png,soft-ice-cream_1f366.png,shaved-ice_1f367.png,ice-cream_1f368.png,doughnut_1f369.png,cookie_1f36a.png,birthday-cake_1f382.png,shortcake_1f370.png,pie_1f967.png,chocolate-bar_1f36b.png,candy_1f36c.png,lollipop_1f36d.png,custard_1f36e.png,honey-pot_1f36f.png,baby-bottle_1f37c.png,glass-of-milk_1f95b.png,hot-beverage_2615.png,teacup-without-handle_1f375.png,sake-bottle-and-cup_1f376.png,bottle-with-popping-cork_1f37e.png,wine-glass_1f377.png,cocktail-glass_1f378.png,tropical-drink_1f379.png,beer-mug_1f37a.png,clinking-beer-mugs_1f37b.png,clinking-glasses_1f942.png,tumbler-glass_1f943.png,cup-with-straw_1f964.png,chopsticks_1f962.png,fork-and-knife_1f374.png'
  },
  {
    type: 'natural',
    imgNameStr:
      'bouquet_1f490.png,cherry-blossom_1f338.png,white-flower_1f4ae.png,rose_1f339.png,wilted-flower_1f940.png,hibiscus_1f33a.png,sunflower_1f33b.png,blossom_1f33c.png,tulip_1f337.png,seedling_1f331.png,evergreen-tree_1f332.png,deciduous-tree_1f333.png,palm-tree_1f334.png,cactus_1f335.png,ear-of-rice_1f33e.png,herb_1f33f.png,four-leaf-clover_1f340.png,maple-leaf_1f341.png,fallen-leaf_1f342.png,leaf-fluttering-in-wind_1f343.png,mushroom_1f344.png,chestnut_1f330.png,earth-globe-europe-africa_1f30d.png,earth-globe-americas_1f30e.png,earth-globe-asia-australia_1f30f.png,globe-with-meridians_1f310.png,volcano_1f30b.png,mount-fuji_1f5fb.png,foggy_1f301.png,night-with-stars_1f303.png,sunrise-over-mountains_1f304.png,sunrise_1f305.png,new-moon-symbol_1f311.png,waxing-crescent-moon-symbol_1f312.png,first-quarter-moon-symbol_1f313.png,waxing-gibbous-moon-symbol_1f314.png,full-moon-symbol_1f315.png,waning-gibbous-moon-symbol_1f316.png,last-quarter-moon-symbol_1f317.png,waning-crescent-moon-symbol_1f318.png,crescent-moon_1f319.png,new-moon-with-face_1f31a.png,first-quarter-moon-with-face_1f31b.png,last-quarter-moon-with-face_1f31c.png,full-moon-with-face_1f31d.png,sun-with-face_1f31e.png,glowing-star_1f31f.png,shooting-star_1f320.png,milky-way_1f30c.png,sun-behind-cloud_26c5.png,cyclone_1f300.png,rainbow_1f308.png,fire_1f525.png,droplet_1f4a7.png,water-wave_1f30a.png,sparkles_2728.png,tanabata-tree_1f38b.png,pine-decoration_1f38d.png'
  },
  {
    type: 'symbol',
    imgNameStr:
      'heart-decoration_1f49f.png,hundred-points-symbol_1f4af.png,anger-symbol_1f4a2.png,collision-symbol_1f4a5.png,dizzy-symbol_1f4ab.png,splashing-sweat-symbol_1f4a6.png,dash-symbol_1f4a8.png,bomb_1f4a3.png,sleeping-symbol_1f4a4.png,emoji-modifier-fitzpatrick-type-1-2_1f3fb.png,emoji-modifier-fitzpatrick-type-3_1f3fc.png,emoji-modifier-fitzpatrick-type-4_1f3fd.png,emoji-modifier-fitzpatrick-type-5_1f3fe.png,emoji-modifier-fitzpatrick-type-6_1f3ff.png,anchor_2693.png,clock-face-twelve-oclock_1f55b.png,clock-face-twelve-thirty_1f567.png,clock-face-one-oclock_1f550.png,clock-face-one-thirty_1f55c.png,clock-face-two-oclock_1f551.png,clock-face-two-thirty_1f55d.png,clock-face-three-oclock_1f552.png,clock-face-three-thirty_1f55e.png,clock-face-four-oclock_1f553.png,clock-face-four-thirty_1f55f.png,clock-face-five-oclock_1f554.png,clock-face-five-thirty_1f560.png,clock-face-six-oclock_1f555.png,clock-face-six-thirty_1f561.png,clock-face-seven-oclock_1f556.png,clock-face-seven-thirty_1f562.png,clock-face-eight-oclock_1f557.png,clock-face-eight-thirty_1f563.png,clock-face-nine-oclock_1f558.png,clock-face-nine-thirty_1f564.png,clock-face-ten-oclock_1f559.png,clock-face-ten-thirty_1f565.png,clock-face-eleven-oclock_1f55a.png,clock-face-eleven-thirty_1f566.png,mahjong-tile-red-dragon_1f004.png,chart-with-upwards-trend-and-yen-sign_1f4b9.png,currency-exchange_1f4b1.png,heavy-dollar-sign_1f4b2.png,link-symbol_1f517.png,automated-teller-machine_1f3e7.png,put-litter-in-its-place-symbol_1f6ae.png,potable-water-symbol_1f6b0.png,wheelchair-symbol_267f.png,mens-symbol_1f6b9.png,womens-symbol_1f6ba.png,restroom_1f6bb.png,baby-symbol_1f6bc.png,water-closet_1f6be.png,passport-control_1f6c2.png,customs_1f6c3.png,baggage-claim_1f6c4.png,left-luggage_1f6c5.png,children-crossing_1f6b8.png,no-entry-sign_1f6ab.png,no-bicycles_1f6b3.png,no-smoking-symbol_1f6ad.png,do-not-litter-symbol_1f6af.png,non-potable-water-symbol_1f6b1.png,no-pedestrians_1f6b7.png,no-mobile-phones_1f4f5.png,no-one-under-eighteen-symbol_1f51e.png,place-of-worship_1f6d0.png,menorah-with-nine-branches_1f54e.png,six-pointed-star-with-middle-dot_1f52f.png,aries_2648.png,taurus_2649.png,gemini_264a.png,cancer_264b.png,leo_264c.png,virgo_264d.png,libra_264e.png,scorpius_264f.png,sagittarius_2650.png,capricorn_2651.png,aquarius_2652.png,pisces_2653.png,ophiuchus_26ce.png,cinema_1f3a6.png,antenna-with-bars_1f4f6.png,vibration-mode_1f4f3.png,mobile-phone-off_1f4f4.png,japanese-symbol-for-beginner_1f530.png,cross-mark_274c.png,negative-squared-cross-mark_274e.png,heavy-plus-sign_2795.png,curly-loop_27b0.png,double-curly-loop_27bf.png,black-question-mark-ornament_2753.png,white-question-mark-ornament_2754.png,white-exclamation-mark-ornament_2755.png,heavy-exclamation-mark-symbol_2757.png,input-symbol-for-latin-capital-letters_1f520.png,input-symbol-for-latin-small-letters_1f521.png,input-symbol-for-numbers_1f522.png,input-symbol-for-symbols_1f523.png,input-symbol-for-latin-letters_1f524.png,negative-squared-ab_1f18e.png,squared-cl_1f191.png,squared-cool_1f192.png,squared-free_1f193.png,squared-id_1f194.png,squared-new_1f195.png,squared-ng_1f196.png,squared-ok_1f197.png,squared-sos_1f198.png,squared-up-with-exclamation-mark_1f199.png,squared-vs_1f19a.png,squared-katakana-koko_1f201.png,squared-cjk-unified-ideograph-6709_1f236.png,squared-cjk-unified-ideograph-6307_1f22f.png,circled-ideograph-advantage_1f250.png,squared-cjk-unified-ideograph-5272_1f239.png,squared-cjk-unified-ideograph-7121_1f21a.png,squared-cjk-unified-ideograph-7981_1f232.png,circled-ideograph-accept_1f251.png,squared-cjk-unified-ideograph-7533_1f238.png,squared-cjk-unified-ideograph-5408_1f234.png,squared-cjk-unified-ideograph-7a7a_1f233.png,squared-cjk-unified-ideograph-55b6_1f23a.png,squared-cjk-unified-ideograph-6e80_1f235.png,large-red-circle_1f534.png,large-blue-circle_1f535.png,medium-black-circle_26ab.png,medium-white-circle_26aa.png,black-large-square_2b1b.png,white-large-square_2b1c.png,black-medium-small-square_25fe.png,white-medium-small-square_25fd.png,large-orange-diamond_1f536.png,large-blue-diamond_1f537.png,small-orange-diamond_1f538.png,small-blue-diamond_1f539.png,up-pointing-red-triangle_1f53a.png,down-pointing-red-triangle_1f53b.png,diamond-shape-with-a-dot-inside_1f4a0.png,radio-button_1f518.png,white-square-button_1f533.png,black-square-button_1f532.png'
  },
  {
    type: 'gesture',
    imgNameStr:
      'waving-hand-sign_1f44b.png,raised-back-of-hand_1f91a.png,raised-hand_270b.png,raised-hand-with-part-between-middle-and-ring-fingers_1f596.png,ok-hand-sign_1f44c.png,hand-with-index-and-middle-fingers-crossed_1f91e.png,i-love-you-hand-sign_1f91f.png,sign-of-the-horns_1f918.png,call-me-hand_1f919.png,white-left-pointing-backhand-index_1f448.png,white-right-pointing-backhand-index_1f449.png,white-up-pointing-backhand-index_1f446.png,reversed-hand-with-middle-finger-extended_1f595.png,white-down-pointing-backhand-index_1f447.png,thumbs-up-sign_1f44d.png,thumbs-down-sign_1f44e.png,raised-fist_270a.png,fisted-hand-sign_1f44a.png,left-facing-fist_1f91b.png,right-facing-fist_1f91c.png,clapping-hands-sign_1f44f.png,person-raising-both-hands-in-celebration_1f64c.png,open-hands-sign_1f450.png,palms-up-together_1f932.png,handshake_1f91d.png,person-with-folded-hands_1f64f.png,flexed-biceps_1f4aa.png,clockwise-downwards-and-upwards-open-circle-arrows_1f503.png,anticlockwise-downwards-and-upwards-open-circle-arrows_1f504.png,back-with-leftwards-arrow-above_1f519.png,end-with-leftwards-arrow-above_1f51a.png,on-with-exclamation-mark-with-left-right-arrow-above_1f51b.png,soon-with-rightwards-arrow-above_1f51c.png,top-with-upwards-arrow-above_1f51d.png,twisted-rightwards-arrows_1f500.png,clockwise-rightwards-and-leftwards-open-circle-arrows_1f501.png,clockwise-rightwards-and-leftwards-open-circle-arrows-with-circled-one-overlay_1f502.png,black-right-pointing-double-triangle_23e9.png,black-left-pointing-double-triangle_23ea.png,up-pointing-small-red-triangle_1f53c.png,black-up-pointing-double-triangle_23eb.png,down-pointing-small-red-triangle_1f53d.png,black-down-pointing-double-triangle_23ec.png'
  },
  {
    type: 'traffic',
    imgNameStr:
      'steam-locomotive_1f682.png,railway-car_1f683.png,high-speed-train_1f684.png,high-speed-train-with-bullet-nose_1f685.png,train_1f686.png,metro_1f687.png,light-rail_1f688.png,station_1f689.png,tram_1f68a.png,monorail_1f69d.png,mountain-railway_1f69e.png,tram-car_1f68b.png,bus_1f68c.png,oncoming-bus_1f68d.png,trolleybus_1f68e.png,minibus_1f690.png,ambulance_1f691.png,fire-engine_1f692.png,police-car_1f693.png,oncoming-police-car_1f694.png,taxi_1f695.png,oncoming-taxi_1f696.png,automobile_1f697.png,oncoming-automobile_1f698.png,recreational-vehicle_1f699.png,delivery-truck_1f69a.png,articulated-lorry_1f69b.png,tractor_1f69c.png,motor-scooter_1f6f5.png,bicycle_1f6b2.png,scooter_1f6f4.png,bus-stop_1f68f.png,fuel-pump_26fd.png,police-cars-revolving-light_1f6a8.png,horizontal-traffic-light_1f6a5.png,vertical-traffic-light_1f6a6.png,octagonal-sign_1f6d1.png,construction-sign_1f6a7.png,sailboat_26f5.png,canoe_1f6f6.png,speedboat_1f6a4.png,ship_1f6a2.png,airplane-departure_1f6eb.png,airplane-arriving_1f6ec.png,seat_1f4ba.png,helicopter_1f681.png,suspension-railway_1f69f.png,mountain-cableway_1f6a0.png,aerial-tramway_1f6a1.png,no-entry_26d4.png'
  }
]

export function getMenuList() {
  let menuList = [
    {
      type: 'people',
      url: IMG_BASE_URL + 'people/grinning-face_1f600.png'
    },
    {
      type: 'goods',
      url: IMG_BASE_URL + 'goods/party-popper_1f389.png'
    },
    {
      type: 'animal',
      url: IMG_BASE_URL + 'animal/dog-face_1f436.png'
    },
    {
      type: 'food',
      url: IMG_BASE_URL + 'food/hamburger_1f354.png'
    },
    {
      type: 'natural',
      url: IMG_BASE_URL + 'natural/palm-tree_1f334.png'
    },
    {
      type: 'symbol',
      url: IMG_BASE_URL + 'symbol/link-symbol_1f517.png'
    },
    {
      type: 'gesture',
      url: IMG_BASE_URL + 'gesture/i-love-you-hand-sign_1f91f.png'
    },
    {
      type: 'traffic',
      url: IMG_BASE_URL + 'traffic/automobile_1f697.png'
    }
  ]
  return menuList
}

// 获取select列表img数据
export function getSelectList() {
  // var pattern = /(?<=_)[A-Za-z0-9]*/g;
  // 去除正则断言写法，兼容Safari浏览器
  // var pattern = new RegExp("(?<=_)[A-Za-z0-9]*", 'g');
  let result = []
  for (let index in imgName) {
    let typeList = []
    let imgNameList = imgName[index].imgNameStr.split(',')
    // typeList.push({type: imgName[index].type});
    imgNameList.map(img => {
      typeList.push({
        unicode: img.split('_')[1].split('.')[0],
        imgUrl: IMG_BASE_URL + imgName[index].type + '/' + img
      })
    })
    result.push({
      type: imgName[index].type,
      data: typeList
    })
  }
  // for (let index in imgName) {
  //     if (imgName[index].type == type) {
  //         let imgNameList = imgName[index].imgNameStr.split(',');
  //         imgNameList.map(img => {
  //             result.push({
  //                 unicode: img.match(pattern)[0],
  //                 imgUrl: IMG_BASE_URL + imgName[index].type + '/' + img
  //             })
  //         })
  //         break;
  //     }
  // }
  return result
}

// 获取指定emoji标签的imgUrl
export function getEmojiImgUrl(unicodeStr) {
  for (let typeIndex in imgName) {
    let imgNameList = imgName[typeIndex].imgNameStr.split(',')
    for (let imgNameIndex in imgNameList) {
      if (imgNameList[imgNameIndex].indexOf(unicodeStr) > -1) {
        return IMG_BASE_URL + imgName[typeIndex].type + '/' + imgNameList[imgNameIndex]
      }
    }
  }
  // imgName.map(imgType => {
  //     let imgNameList = imgType.imgNameStr.split(',');
  //     imgNameList.map(imgName => {
  //         if(imgName.indexOf(unicodeStr) > -1){
  //             console.log(IMG_BASE_URL + imgType.type + '/' + imgName);
  //             return IMG_BASE_URL + imgType.type + '/' + imgName;
  //         }
  //     })
  // })
  // console.log('123');
  return ''
}
