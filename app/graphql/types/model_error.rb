# frozen_string_literal: true

module Types
  class ModelError < Types::BaseObject
    description 'A user-readable error'

    field :message, String, null: false, description: 'A description of the error'

    field :key, String, null: false, description: 'Which input value this error came from'
  end
end
