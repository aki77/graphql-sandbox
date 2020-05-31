# frozen_string_literal: true

class GraphqlPolicy
  DEFAULT_RULE = ->(_obj, _args, _ctx) { false }

  RULES = {
    Types::ChatRoomType => {
      '*': ->(_obj, _args, _ctx) { true }
    },
    Types::ChatRoomMessageType => {
      '*': ->(_obj, _args, _ctx) { true }
    }
  }.freeze

  def self.guard(type, field)
    return ->(_obj, _args, _ctx) { true } if type.introspection?

    default = field == :'*' ? DEFAULT_RULE : nil
    RULES.dig(type, field) || default
  end
end
