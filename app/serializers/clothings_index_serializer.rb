class ClothingsIndexSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :user_id, :name
end
