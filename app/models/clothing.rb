class Clothing < ApplicationRecord
    belongs_to :user
    has_many :swap_clothing
    has_many :swaps, through: :swap_clothings
end