class ClothingSerializer < ActiveModel::Serializer
  attributes :id, :name, :color, :brand, :size, :condition, :description, :value, :user_id
end
