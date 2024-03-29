# Notify upon problems with plants

import appdaemon.plugins.hass.hassapi as hass
import datetime
import time


class Test(hass.Hass):

    def initialize(self):

        self.listen_event(self.receive_telegram_callback, 'telegram_callback')

    def receive_telegram_callback(self, event_id, payload_event, *args):

        data_callback   = payload_event['data']
        callback_id     = payload_event['id']
        message_id      = payload_event['message_id']
        chat_id         = payload_event['user_id']

        self.log(payload_event)

        if payload_event['data'] == '/removekeyboard':

            self.call_service(
                'telegram_bot/answer_callback_query',
                message='OK',
                callback_query_id=callback_id
                )

            self.call_service(
                'telegram_bot.edit_replymarkup',
                message_id=message_id,
                chat_id=user_id,
                inline_keyboard=[]
                )
