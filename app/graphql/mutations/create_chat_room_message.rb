module Mutations
  class CreateChatRoomMessage < BaseMutation
    argument :chat_room_id, ID, required: true
    argument :content, String, required: true

    field :chat_room_message, Types::ChatRoomMessageType, null: false

    def resolve(chat_room_id:, content:)
      chat_room = ChatRoom.find(chat_room_id)
      chat_room_message = chat_room.chat_room_messages.build(content: content)
      chat_room_message.save!
      { chat_room_message: chat_room_message }
    end
  end
end
