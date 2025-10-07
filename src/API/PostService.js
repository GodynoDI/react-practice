export default class PostService {
  static async getAll() {
    const response = await fetch('https://jsonplaceholder.typicode.com/post1s');
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return response.json();
  }
}