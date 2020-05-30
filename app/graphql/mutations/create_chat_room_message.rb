# frozen_string_literal: true

module Mutations
  class CreateChatRoomMessage < BaseMutation
    argument :chat_room_id, ID, required: true
    argument :content, String, required: true

    field :chat_room_message, Types::ChatRoomMessageType, null: true

    def resolve(chat_room_id:, content:)
      chat_room = ChatRoom.find(chat_room_id)
      chat_room_message = chat_room.chat_room_messages.build(content: content)

      if chat_room_message.save
        GraphqlSandboxSchema.subscriptions.trigger('chatRoomMessageWasCreated', { chatRoomId: chat_room.id }, chat_room_message)
        { chat_room_message: chat_room_message }
      else
        errors = chat_room_message.errors.keys.flat_map do |key|
          chat_room_message.errors.full_messages_for(key).map { |message| { key: key, message: message } }
        end

        { errors: errors }
      end
    end
  end
end
