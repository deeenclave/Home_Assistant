$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Simple Control");
    content_width = (115 + 5) * 8 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [115, 115],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 8,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-basement" id="default-basement"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-main-dashboard" id="default-main-dashboard"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 2, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-top-floor" id="default-top-floor"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 3, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-clock" id="default-clock"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 2, 1, 4, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-switch-switch" id="default-switch-switch"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 6, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-switch-kettle" id="default-switch-kettle"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 7, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-switch-living-room-media-master" id="default-switch-living-room-media-master"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 8, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-entrance-lights" id="default-entrance-lights"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 2, 2, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-kitchen-spots" id="default-kitchen-spots"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 2, 2, 3, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-dining-room-lights" id="default-dining-room-lights"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 2, 2, 5, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-guest-mode" id="default-guest-mode"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 7, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-night-light" id="default-scene-night-light"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 8, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-all-lights-off" id="default-scene-all-lights-off"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 8, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-basement-lights" id="default-basement-lights"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 2, 2, 1, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-top-floor-lights" id="default-top-floor-lights"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 2, 2, 3, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-conservatory-lights" id="default-conservatory-lights"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 2, 2, 5, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-fibaro-system-fgwpef-wall-plug-gen5-power" id="default-sensor-fibaro-system-fgwpef-wall-plug-gen5-power"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 7, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-script-everyone-left-turn-off-everything" id="default-script-everyone-left-turn-off-everything"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 8, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-espresso-power" id="default-espresso-power"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 7, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-reload" id="default-reload"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 8, 5)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-basement"] = new basejavascript("default-basement", "", "default", {'widget_type': 'basejavascript', 'fields': {'title': 'Basement', 'title2': '', 'icon': 'mdi:format-vertical-align-bottom', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'icon': 'mdi:format-vertical-align-bottom', 'dashboard': 'basement', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-main-dashboard"] = new basejavascript("default-main-dashboard", "", "default", {'widget_type': 'basejavascript', 'fields': {'title': 'Main', 'title2': '', 'icon': 'mdi:format-vertical-align-center', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'icon': 'mdi:format-vertical-align-center', 'dashboard': 'main_dashboard', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-top-floor"] = new basejavascript("default-top-floor", "", "default", {'widget_type': 'basejavascript', 'fields': {'title': 'Top Floor', 'title2': '', 'icon': 'mdi:format-vertical-align-top', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'icon': 'mdi:format-vertical-align-top', 'dashboard': 'top_floor', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-clock"] = new baseclock("default-clock", "", "default", {'widget_type': 'baseclock', 'fields': {'date': '', 'time': ''}, 'static_css': {'date_style': 'color: white;font-size: 200%;', 'time_style': 'color: pink;', 'widget_style': 'background-color: #444;'}, 'static_icons': [], 'icons': [], 'css': {}, 'time_format': '24hr', 'date_format_country': 'dk', 'date_format_options': {'weekday': 'short', 'day': 'numeric', 'month': 'numeric'}, 'date_style': 'color: white;font-size: 200%;', 'time_style': 'color: pink;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-switch-switch"] = new baseswitch("default-switch-switch", "", "default", {'widget_type': 'baseswitch', 'entity': 'switch.switch', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.switch'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.switch'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-switch-kettle"] = new baseswitch("default-switch-kettle", "", "default", {'widget_type': 'baseswitch', 'entity': 'switch.kettle', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.kettle'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.kettle'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-switch-living-room-media-master"] = new baseswitch("default-switch-living-room-media-master", "", "default", {'widget_type': 'baseswitch', 'entity': 'switch.living_room_media_master', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.living_room_media_master'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.living_room_media_master'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-entrance-lights"] = new baselight("default-entrance-lights", "", "default", {'widget_type': 'baselight', 'entity': 'light.entrance_lights', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.entrance_lights'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.entrance_lights'}, 'fields': {'title': 'Lys i entré', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'mdi-lightbulb-on', 'icon_off': 'mdi-lightbulb'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: #fff;font-weight: bold;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;font-size: 150%;'}, 'css': {'icon_style_active': 'color: yellow;margin-top: 40px;', 'icon_style_inactive': 'color: grey;margin-top: 40px;'}, 'title_style': 'font-weight: bold;', 'widget_style': 'font-size: 150%;', 'icon_on': 'mdi-lightbulb-on', 'icon_off': 'mdi-lightbulb', 'icon_style_active': 'color: yellow;margin-top: 40px;', 'icon_style_inactive': 'color: grey;margin-top: 40px;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-kitchen-spots"] = new baselight("default-kitchen-spots", "", "default", {'widget_type': 'baselight', 'entity': 'light.kitchen_spots', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.kitchen_spots'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.kitchen_spots'}, 'fields': {'title': 'Lys i køkken', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'mdi-lightbulb-on', 'icon_off': 'mdi-lightbulb'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: white;font-weight: bold;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;font-size: 150%;'}, 'css': {'icon_style_active': 'color: yellow;margin-top: 40px;', 'icon_style_inactive': 'color: grey;margin-top: 40px;'}, 'title_style': 'color: white;font-weight: bold;', 'widget_style': 'font-size: 150%;', 'icon_on': 'mdi-lightbulb-on', 'icon_off': 'mdi-lightbulb', 'icon_style_active': 'color: yellow;margin-top: 40px;', 'icon_style_inactive': 'color: grey;margin-top: 40px;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-dining-room-lights"] = new baselight("default-dining-room-lights", "", "default", {'widget_type': 'baselight', 'entity': 'light.dining_room_lights', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.dining_room_lights'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.dining_room_lights'}, 'fields': {'title': 'Lys i spisestuen', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'mdi-lightbulb-on', 'icon_off': 'mdi-lightbulb'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: white;font-weight: bold;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;font-size: 150%;'}, 'css': {'icon_style_active': 'color: yellow;margin-top: 40px;', 'icon_style_inactive': 'color: grey;margin-top: 40px;'}, 'title_style': 'color: white;font-weight: bold;', 'widget_style': 'font-size: 150%;', 'icon_on': 'mdi-lightbulb-on', 'icon_off': 'mdi-lightbulb', 'icon_style_active': 'color: yellow;margin-top: 40px;', 'icon_style_inactive': 'color: grey;margin-top: 40px;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-guest-mode"] = new baseswitch("default-guest-mode", "", "default", {'widget_type': 'baseswitch', 'entity': 'input_boolean.guest_mode', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'input_boolean.guest_mode'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'input_boolean.guest_mode'}, 'fields': {'title': 'Gæster i huset', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'mdi-home-account', 'icon_off': 'mdi-home'}, 'static_icons': [], 'css': {'icon_style_active': 'color: green;margin-top: 40px;', 'icon_style_inactive': 'color: grey;margin-top: 40px;'}, 'static_css': {'title_style': 'color: white;font-weight: bold;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;font-size: 150%;'}, 'title_style': 'color: white;font-weight: bold;', 'widget_style': 'font-size: 150%;', 'icon_on': 'mdi-home-account', 'icon_off': 'mdi-home', 'icon_style_active': 'color: green;margin-top: 40px;', 'icon_style_inactive': 'color: grey;margin-top: 40px;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-scene-night-light"] = new baseswitch("default-scene-night-light", "", "default", {'widget_type': 'baseswitch', 'entity': 'scene.night_light', 'state_inactive': 'scening', 'state_active': 'stillscening', 'enable': 1, 'momentary': 1000, 'ignore_state': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'scene.night_light'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'scene.night_light'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fa-square', 'icon_off': 'fa-square'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-scene-all-lights-off"] = new baseswitch("default-scene-all-lights-off", "", "default", {'widget_type': 'baseswitch', 'entity': 'scene.all_lights_off', 'state_inactive': 'scening', 'state_active': 'stillscening', 'enable': 1, 'momentary': 1000, 'ignore_state': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'scene.all_lights_off'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'scene.all_lights_off'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fa-square', 'icon_off': 'fa-square'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-basement-lights"] = new baselight("default-basement-lights", "", "default", {'widget_type': 'baselight', 'entity': 'light.basement_lights', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.basement_lights'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.basement_lights'}, 'fields': {'title': 'Lys i kælder', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'mdi-lightbulb-on', 'icon_off': 'mdi-lightbulb'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: white;font-weight: bold;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;font-size: 150%;'}, 'css': {'icon_style_active': 'color: yellow;margin-top: 40px;', 'icon_style_inactive': 'color: grey;margin-top: 40px;'}, 'title_style': 'color: white;font-weight: bold;', 'widget_style': 'font-size: 150%;', 'icon_on': 'mdi-lightbulb-on', 'icon_off': 'mdi-lightbulb', 'icon_style_active': 'color: yellow;margin-top: 40px;', 'icon_style_inactive': 'color: grey;margin-top: 40px;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-top-floor-lights"] = new baselight("default-top-floor-lights", "", "default", {'widget_type': 'baselight', 'entity': 'light.top_floor_lights', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.top_floor_lights'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.top_floor_lights'}, 'fields': {'title': 'Lys på første sal', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'mdi-lightbulb-on', 'icon_off': 'mdi-lightbulb'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: white;font-weight: bold;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;font-size: 150%;'}, 'css': {'icon_style_active': 'color: yellow;margin-top: 40px;', 'icon_style_inactive': 'color: grey;margin-top: 40px;'}, 'title_style': 'color: white;font-weight: bold;', 'widget_style': 'font-size: 150%;', 'icon_on': 'mdi-lightbulb-on', 'icon_off': 'mdi-lightbulb', 'icon_style_active': 'color: yellow;margin-top: 40px;', 'icon_style_inactive': 'color: grey;margin-top: 40px;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-conservatory-lights"] = new baselight("default-conservatory-lights", "", "default", {'widget_type': 'baselight', 'entity': 'light.conservatory_lights', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.conservatory_lights'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.conservatory_lights'}, 'fields': {'title': 'Lys i udestue', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'mdi-lightbulb-on', 'icon_off': 'mdi-lightbulb'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: white;font-weight: bold;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;font-size: 150%;'}, 'css': {'icon_style_active': 'color: yellow;margin-top: 40px;', 'icon_style_inactive': 'color: grey;margin-top: 40px;'}, 'title_style': 'color: white;font-weight: bold;', 'widget_style': 'font-size: 150%;', 'icon_on': 'mdi-lightbulb-on', 'icon_off': 'mdi-lightbulb', 'icon_style_active': 'color: yellow;margin-top: 40px;', 'icon_style_inactive': 'color: grey;margin-top: 40px;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-sensor-fibaro-system-fgwpef-wall-plug-gen5-power"] = new basedisplay("default-sensor-fibaro-system-fgwpef-wall-plug-gen5-power", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.fibaro_system_fgwpef_wall_plug_gen5_power', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;', 'container_style': ''}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-script-everyone-left-turn-off-everything"] = new baseswitch("default-script-everyone-left-turn-off-everything", "", "default", {'widget_type': 'baseswitch', 'entity': 'script.everyone_left_turn_off_everything', 'state_inactive': 'off', 'state_active': 'on', 'enable': 1, 'momentary': 1000, 'ignore_state': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'script.everyone_left_turn_off_everything'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'script.everyone_left_turn_off_everything'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fa-th-large', 'icon_off': 'fa-th-large'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-espresso-power"] = new basedisplay("default-espresso-power", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.neo_coolcam_power_plug_12a_power', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': 'Espresso Power', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;font-size: 100%;', 'container_style': ''}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'widget_style': 'font-size: 100%;', 'icon_style_active': 'margin-top: -15px;', 'icon_style_inactive': 'margin-top: -15px;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-reload"] = new basejavascript("default-reload", "", "default", {'widget_type': 'basejavascript', 'command': 'location.reload(true)', 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-refresh'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    

    // Setup click handler to cancel timeout navigations

    $( ".gridster" ).click(function(){
        clearTimeout(myTimeout);
        if (myTimeoutSticky) {
            myTimeout = setTimeout(function() { navigate(myTimeoutUrl); }, myTimeoutDelay);
        }
    });

    // Set up timeout

    var myTimeout;
    var myTimeoutUrl;
    var myTimeoutDelay;
    var myTimeoutSticky = 0;

    if (location.search != "")
    {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
        });

        if ("timeout" in result && "return" in result)
        {
            url = result.return
            argcount = 0
            for (arg in result)
            {
                if (arg != "timeout" && arg != "return" && arg != "sticky")
                {
                    if (argcount == 0)
                    {
                        url += "?";
                    }
                    else
                    {
                        url += "?";
                    }
                    argcount ++;
                    url += arg + "=" + result[arg]
                }
            }
            if ("sticky" in result)
            {
                myTimeoutSticky = (result.sticky == "1");
            }
            myTimeoutUrl = url;
            myTimeoutDelay = result.timeout * 1000;
            myTimeout = setTimeout(function() { navigate(url); }, result.timeout * 1000);
        }
    }

    // Start listening for HA Events
    if (location.protocol == 'https:')
    {
        wsprot = "wss:"
    }
    else
    {
        wsprot = "ws:"
    }
    var stream_url = wsprot + '//' + location.host + '/stream'
    ha_status(stream_url, "Simple Control", widgets);

});