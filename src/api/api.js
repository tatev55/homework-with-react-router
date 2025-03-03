class Recipes {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getRecipes() {
        try {
            const response = await fetch(this.baseUrl);
            const data = await response.json();
            return data.recipes;  
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    }


    async getRecipeById(id) {
        try {
          const response = await fetch(`${this.baseUrl}/${id}`);
          const data = await response.json();
        
          return data;  
        } catch (error) {
          console.error("Error fetching recipe by ID:", error);
        }
      }

      async searchRecipes(query){
        try{
            const response = await fetch(`${this.baseUrl}?search=${query}`);
            const data = await response.json();
            return data.recipes;
        }catch(error){
            console.error("Error searching recipes:", error);
            
        }
      }
}

export default new Recipes("https://dummyjson.com/recipes");  
