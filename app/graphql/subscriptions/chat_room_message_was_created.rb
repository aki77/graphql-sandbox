# frozen_string_literal: true

class Subscriptions::ChatRoomMessageWasCreated < Subscriptions::BaseSubscription
  argument :chat_room_id, ID, required: true

  field :chat_room, Types::ChatRoomType, null: false
  # field :chat_room_message, Types::ChatRoomMessageType, null: false

  # It's passed to other methods as `room`
  def subscribe(chat_room_id:)
    # authorize, etc ...
    # Return the room in the initial response
    {
      chat_room: ChatRoom.find(chat_room_id)
    }
  end
end
