categories = ['Shirt', 'Bottoms', 'Shoes', "Dress", 'Accessory', 'Socks']
# colors = ['Red', 'Black', 'Blue', 'Purple', 'White', 'Pink', 'Green', 'Fuchsia', 'Orange', 'Gold']
sizes = ['Extra-small', 'Small', 'Medium', 'Large', 'Extra-large']
conditions = ['New', 'Like-new', 'Gently-used', 'Normal-wear', 'Heavily-used', 'Destroyed-chic']

puts "Deleting old data"

User.destroy_all
Clothing.destroy_all
Swap.destroy_all
SwapUser.destroy_all
SwapClothing.destroy_all

puts "Seeding new data"

10.times do
    User.create(username: Faker::Name.first_name+(Faker::Number.number(digits: 3).to_s), password_digest: BCrypt::Password.create('admin'), bio: Faker::Movie.quote, spirit_color: Faker::Color.hex_color, image_url: Faker::LoremFlickr.image)
end

40.times do
    Clothing.create(name: Faker::Quote.robin, category: categories.sample, color: Faker::Color.color_name, brand: Faker::Company.name, size: sizes.sample, condition: conditions.sample, image_url: Faker::LoremFlickr.image, description: Faker::TvShows::Friends.quote, value: Faker::Number.number(digits: 2), user_id: User.ids.sample)
end

4.times do
    Swap.create(start: Faker::Time.between(from: DateTime.now, to: DateTime.now + 1), end: Faker::Time.between(from: DateTime.now + 1, to: DateTime.now + 2), name: Faker::Subscription.plan)
end

15.times do
    SwapUser.create(user_id: User.ids.sample, swap_id: Swap.ids.sample, credits: Faker::Number.number(digits: 1))
end

15.times do
    SwapClothing.create(clothing_id: Clothing.ids.sample, swap_id: Swap.ids.sample, prev_owner_id: User.ids.sample)
end

puts 'Seeded new data!'