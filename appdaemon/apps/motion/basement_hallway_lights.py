# Motion sensors to control the basement entrance lights.

import appdaemon.plugins.hass.hassapi as hass


class MotionClass(hass.Hass):

    def initialize(self):
        # Motion sensors.

        self.motion_sensors = [
            # "binary_sensor.motion_sensor_158d00023e3742", # Entrance Motion Sensor
            "binary_sensor.motion_sensor_158d000210ca6f", # Basement Stairway Motion Sensor
            "binary_sensor.motion_sensor_158d000200d203", # Basmenet Entrance
            "binary_sensor.motion_sensor_158d000236a116" # TV room
            ]

        for entity in self.motion_sensors:
            self.listen_state(self.motionTrigger, entity)


    # Assess whether we are awake, based on state of entity. Find better proxy eventually.
    def movieNight(self, entity):
        if self.get_state(entity) == "on":
            return True


    # Return True/False for whether entity_id has state "on".
    def isOn(self, entity_id):
        return self.get_state(entity_id) == 'on'


    # Motion sensor lights
    def motionTrigger(self, entity, attribute, old, new, kwargs):

        sensor_1_state = self.get_state("binary_sensor.motion_sensor_158d000200d203") == 'on' # Basmenet Entrance
        sensor_2_state = self.get_state("binary_sensor.motion_sensor_158d000210ca6f") == 'on' # Basement Stairway Motion
        sensor_3_state = self.get_state("binary_sensor.motion_sensor_158d000236a116") == 'on' # TV Room Motion

        ## Update "movie_night" with real entity_id once applicable. ##
        movie_night = False # self.isOn("media_player.tv_room_tv") # Are we using the TV lounge?

        if any([sensor_1_state, sensor_2_state, sensor_3_state]):
            if movie_night == False:
                self.turn_on("light.basement_hallway",brightness=255,kelvin=2700)
            else:
                self.turn_on("light.basement_hallway",brightness=75,kelvin=2200)

        elif not all([sensor_1_state, sensor_2_state, sensor_3_state]):
            self.turn_off("light.basement_hallway")

    def inpuBoolean(self, entity, attribute, old, new, kwargs):

        if new == "on":
            self.motionTrigger(entity, attribute, old, new, kwargs)
