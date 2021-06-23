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

yosef = User.create!(username: "Yosef", password: "admin", bio: "Just here to make some stuff break", image_url: "https://i.kym-cdn.com/entries/icons/facebook/000/033/553/itcrowd.jpg", spirit_color: "#0abf00")
jenna = User.create!(username: "Jenna", password: "admin", bio: "Just here to make some stuff work", image_url: "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png", spirit_color: "#de0781")



# 10.times do
#     User.create(username: Faker::Name.first_name+(Faker::Number.number(digits: 3).to_s), password_digest: BCrypt::Password.create('admin'), bio: Faker::Movie.quote, spirit_color: Faker::Color.hex_color, image_url: Faker::LoremFlickr.image)
# end

# 40.times do
#     Clothing.create(name: Faker::Quote.robin, category: categories.sample, color: Faker::Color.color_name, brand: Faker::Company.name, size: sizes.sample, condition: conditions.sample, image_url: Faker::LoremFlickr.image, description: Faker::TvShows::Friends.quote, value: Faker::Number.number(digits: 2), user_id: User.ids.sample)
# end

Clothing.create(name: "Black Shirt", category: categories.sample, color: "Black", brand: "Gap", size: sizes.sample, condition: conditions.sample, image_url: Faker::LoremFlickr.image, description: Faker::TvShows::Friends.quote, value: 10, user_id: jenna.id)

Clothing.create(name: "Red Pants", category: categories.sample, color: "Red", brand: "Levi's", size: sizes.sample, condition: conditions.sample, image_url: Faker::LoremFlickr.image, description: Faker::TvShows::Friends.quote, value: 25, user_id: yosef.id)

Clothing.create(name: "Brown Loafers", category: categories.sample, color: "Brown", brand: "Salvatore Ferragamo", size: sizes.sample, condition: conditions.sample, image_url: Faker::LoremFlickr.image, description: Faker::TvShows::Friends.quote, value: 300, user_id: yosef.id)

Clothing.create(name: "Purple Blouse", category: categories.sample, color: "Purple", brand: "Vince", size: sizes.sample, condition: conditions.sample, image_url: Faker::LoremFlickr.image, description: Faker::TvShows::Friends.quote, value: 40, user_id: jenna.id)

Clothing.create(name: "Black Shirt", category: categories.sample, color: "Black", brand: "Gap", size: sizes.sample, condition: conditions.sample, image_url: Faker::LoremFlickr.image, description: Faker::TvShows::Friends.quote, value: 46, user_id: yosef.id)


# 4.times do
#     Swap.create(start: Faker::Time.between(from: DateTime.now, to: DateTime.now - 1), end: Faker::Time.between(from: DateTime.now + 1, to: DateTime.now + 2), name: Faker::Subscription.plan)
# end

Swap.create(start: "2021-06-23 12:30:59 -0700", end: "2021-06-23 17:30:59 -0700", name: "Swap 1")
Swap.create(start: "2021-06-24 12:30:59 -0700", end: "2021-06-24 15:30:59 -0700", name: "Swap 2")
Swap.create(start: "2021-06-25 08:30:59 -0700", end: "2021-06-25 12:30:59 -0700", name: "Swap 3")
Swap.create(start: "2021-06-22 10:30:59 -0700", end: "2021-06-22 14:30:59 -0700", name: "Swap 4")
Swap.create(start: "2021-06-26 14:30:59 -0700", end: "2021-06-26 17:30:59 -0700", name: "Swap 5")


# 15.times do
#     SwapUser.create(user_id: User.ids.sample, swap_id: Swap.ids.sample, credits: Faker::Number.number(digits: 1))
# end

# 15.times do
#     SwapClothing.create(clothing_id: Clothing.ids.sample, swap_id: Swap.ids.sample, prev_owner_id: User.ids.sample)
# end

# Swap.create(start: DateTime.now + 1, end: DateTime.now + 2, name: "Test Swap")

puts 'Seeded new data!'