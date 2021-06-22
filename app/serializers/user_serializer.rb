class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :image_url, :spirit_color

  has_many :swaps, through: :swap_users
end
