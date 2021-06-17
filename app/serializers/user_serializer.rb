class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :image_url, :spirit_color
end
