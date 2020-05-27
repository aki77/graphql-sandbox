# frozen_string_literal: true

class Subscriptions::ChatRoomMessageWasCreated < Subscriptions::BaseSubscription
  argument :chat_room_id, ID, required: true

  # field :chat_room, Types::ChatRoomType, null: false
  field :chat_room_message, Types::ChatRoomMessageType, null: false

  # field :results, Int, null: false
  # def subscribe
  #   { results: Time.now.to_i }
  # end

  # It's passed to other methods as `room`
  # def subscribe(chat_room_id:)
  #   # authorize, etc ...
  #   # Return the room in the initial response
  #   {
  #     chat_room: ChatRoom.find(chat_room_id)
  #   }
  # end

  def update(chat_room_id:)
    {
      chat_room_message: object
    }
  end
end
