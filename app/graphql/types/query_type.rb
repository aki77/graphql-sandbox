# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    # field :chat_room_messages, Types::ChatRoomMessageType.connection_type, null: false do
    #   description 'メッセージ一覧をpaginationで取得します'
    #   argument :chat_room_id,  ID, required: true
    # end

    # def chat_room_messages(chat_room_id:)
    #   ChatRoomMessage.where(chat_room_id: chat_room_id).order(id: :desc)
    # end

    field :chat_room_messages, [Types::ChatRoomMessageType], null: false do
      description 'メッセージを全て取得します'
      argument :chat_room_id, ID, required: true
    end

    def chat_room_messages(chat_room_id:)
      ChatRoomMessage.where(chat_room_id: chat_room_id)
    end
  end
end
