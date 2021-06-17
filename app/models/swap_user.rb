class SwapUser < ApplicationRecord
    belongs_to :user
    belongs_to :swap
end
