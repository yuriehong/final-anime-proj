# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


#require 'faker'
puts "Destroying seeds"
User.destroy_all
Anime.destroy_all
Review.destroy_all


puts "🌱 Seeding data..."

u1 = User.create!({
    name: "Yurie",
    username: "yhong",
    email: "yurie.hong@gmail.com",
    password: "meepmeep",
})
u2 = User.create!({
    name: "Haley",
    username: "hail9",
    email: "hailee@gmail.com",
    password: "moopmoop",
})

a1 = Anime.create!(title: "Spy x Family", image:"https://www.denofgeek.com/wp-content/uploads/2022/04/SPY-x-FAMILY-KV.jpg?fit=1200%2C675", year: 2022, genre:"Comedy", summary: "World peace is at stake and secret agent Twilight must undergo his most difficult mission yet—pretend to be a family man. Posing as a loving husband and father, he will infiltrate an elite school to get close to a high-profile politician. He has the perfect cover, except his wife is a deadly assassin and neither knows. But someone does, his adopted daughter who is a telepath!")
a2 = Anime.create!(title: "Hunter X Hunter", image:"https://www.cnet.com/a/img/resize/e87b7f497714ecc454464a51a53c16c7f018c915/2022/05/25/36e6a368-1b94-44b1-9fb8-5aaa7977bf05/hunterxhunter.jpg?auto=webp&fit=crop&height=675&width=1200",year: 2011, genre:"Adventure", summary:"Gon, a young boy who lives on Whale Island, dreams of becoming a Hunter like his father, who left when Gon was still young.")
a3 = Anime.create!(title: "Demon Slayer", image:"https://img2.hulu.com/user/v3/artwork/2c3e4b00-30d9-434d-bccc-cf346e40e868?base_image_bucket_name=image_manager&base_image=15168dce-421a-4acd-9869-54bac2c22330&region=US&format=jpeg&size=952x536", year: 2019, genre:"Shonen", summary: "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.")
a4 = Anime.create!(title: "Tower of God", image:"https://m.media-amazon.com/images/M/MV5BZGM4NjE1OWYtNzcwMC00ZGY0LWE4NjEtZTgzYzY4YWU5M2E3XkEyXkFqcGdeQXVyMzI2Mjc1NjQ@._V1_.jpg", year: 2020, genre:"Shonen", summary:"There is a tower that summons chosen people called Regulars with the promise of granting their deepest desires. Whether it be wealth, fame, authority, or something that surpasses them all—everything awaits those who reach the top. Twenty-Fifth Bam is a boy who had only known a dark cave, a dirty cloth, and an unreachable light his entire life. So when a girl named Rachel came to him through the light, his entire world changed. Becoming close friends with Rachel, he learned various things about the outside world from her. But when Rachel says she must leave him to climb the Tower, his world shatters around him. Vowing to follow after her no matter what it takes, he sets his sight on the tower, and a miracle occurs. Thus begins the journey of Bam, a young boy who was not chosen by the Tower but opened its gates by himself. They call his kind Irregulars —beings that have shaken the very foundation of the Tower each time they set foot inside it.")
a5 = Anime.create!(title: "That Time I Got Reincarnated As A Slime", image:"https://upload.wikimedia.org/wikipedia/en/4/4f/That_Time_I_Got_Reincarnated_as_a_Slime_official_anime_cover.jpg", year: 2019, genre:"Isekai", summary:"Corporate worker Mikami Satoru is stabbed by a random killer, and is reborn to an alternate world. But he turns out to be reborn a slime! Thrown into this new world with the name Rimuru, he begins his quest to create a world that is welcoming to all races.")
a6 = Anime.create!(title: "Jujutsu Kaisen", image:"https://www.animationmagazine.net/wordpress/wp-content/uploads/Jujutsu-Kaisen-5.jpg", year: 2022, genre:"Action",  summary: "Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, taking the curse into his own soul. From then on, he shares one body with Ryomen Sukuna. Guided by the most powerful of sorcerers, Satoru Gojo, Itadori is admitted to Tokyo Jujutsu High School, an organization that fights the curses... and thus begins the heroic tale of a boy who became a curse to exorcise a curse, a life from which he could never turn back.")

r1 = Review.create!(rating: 10, comment: "Amazing family-friendly show. Anya Forger is adorable!", anime_id:a1.id, user_id: u1.id)
r2 = Review.create!(rating: 9, comment: "This anime is really fun to watch, you may think that it is only about a little kid trying to find his dad, but it gets a lot deeper than that. I think this anime should be as popular as One piece, Naruto or Bleach. I don't think there is one single episode in hunter x Hunter where I was bored. The best thing is that this anime has no fillers at all.", anime_id:a2.id, user_id: u1.id)
r3 = Review.create!(rating: 10, comment:"I don't write these. this is my first, this show is a gift from the anime gods. it is perfection. not an opinion. a fact. 8 episodes in and they are all flawless. except the fact i want more of them. The Plot effortlessly moves between powerful, creepy, hilarious, and emotional. You love the characters. You are invested. Animation is honestly so gorgeous it ruins other animes for me a bit.", anime_id:a3.id, user_id: u1.id)
r4 = Review.create!(rating: 7, comment: "Unique and funny characters, mystery, action, a wonderful story, and a bunch of hidden lore. This anime will keep you on the edge of your seat and make 1 episode seem like 5 minutes have just passed by. It's different as it throws you in without knowing anything about their world. You figure things out along the way. The soundtrack is also fantastic. Although, they changed and left out some scenes from the webtoon. Which is definitely also worth the read.", anime_id:a4.id, user_id: u2.id)
r5 = Review.create!(rating: 10, comment:"I really really love this show! The MC is overpowered, smart, adorable and a badass! I just love how this show is progressing. I want to watch more about Rimurus adventures and i want to see his little goblin village grow even more. I love the characters, they are all interesting and lovable. I can not get enough of this super awesome anime!!! Great job to the people who made this. Thank you so much!", anime_id:a5.id, user_id: u2.id)
r6 = Review.create!(rating: 8, comment:"Manga readers already know... The anime has so much potential, and they did such a good job, especially on the first episode, that opening- a masterpiece. Love this with all my heart!!
    Honestly, I can't wait to see how this all will play out! I really hope it doesn't fail", anime_id:a6.id, user_id: u1.id)
r7 = Review.create!(rating: 10, comment:"lit", anime_id:a1.id, user_id: u2.id)



puts "✅ Done seeding!"