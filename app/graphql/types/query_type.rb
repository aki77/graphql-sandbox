module Types
  class QueryType < Types::BaseObject
    field :chat_room_messages, Types::ChatRoomMessageType.connection_type, null: false

    def chat_room_messages
      ChatRoomMessage.order(id: :desc)
    end
  end
end
