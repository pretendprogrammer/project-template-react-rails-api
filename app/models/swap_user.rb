class SwapUser < ApplicationRecord
    # validates :user_id, uniquness: {scope: [:swap_id]}
    belongs_to :user
    belongs_to :swap
end
