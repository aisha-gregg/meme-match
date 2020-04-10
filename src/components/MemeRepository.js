export class MemeRepository {
  async findAll() {
    return [
      { id: "1a", image: "meme1a.jpg" },

      { id: "2a", image: "meme2a.jpg" },

      { id: "3a", image: "meme3a.jpg" },

      { id: "4a", image: "meme4a.jpeg" },

      { id: "5a", image: "meme5a.jpeg" },
    ];
  }
}
