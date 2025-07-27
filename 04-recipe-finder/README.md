# Recipe Finder 🍳

**Level:** Intermediate+  
**Time:** 5-6 hours  
**Focus:** Complex State, Data Filtering, Component Architecture

## What You'll Build

A comprehensive recipe finder app where users can search recipes, filter by dietary preferences, save favorites, and create meal plans. Features detailed recipe views with ingredients, instructions, and nutritional info.

## Learning Goals

- Managing complex application state
- Advanced filtering and searching
- Component composition patterns
- Data normalization and organization
- Custom hooks creation
- Advanced useEffect patterns
- Performance optimization with useMemo

## Features to Implement

1. **Recipe Search** - Search by ingredients, cuisine, or recipe name
2. **Advanced Filters** - Diet, cuisine, prep time, difficulty
3. **Recipe Details** - Full recipe with ingredients and instructions
4. **Favorites System** - Save and organize favorite recipes
5. **Meal Planning** - Plan meals for the week
6. **Shopping List** - Generate list from selected recipes
7. **Nutritional Info** - Calories, macros, dietary tags

## Project Structure

```
src/
  components/
    RecipeApp.js         # Main app component
    SearchBar.js         # Recipe search functionality
    FilterPanel.js       # Advanced filtering options
    RecipeGrid.js        # Recipe cards display
    RecipeCard.js        # Individual recipe preview
    RecipeDetail.js      # Full recipe view
    FavoritesPage.js     # Saved recipes
    MealPlanner.js       # Weekly meal planning
    ShoppingList.js      # Generated shopping list
  hooks/
    useRecipes.js        # Custom hook for recipe data
    useLocalStorage.js   # Persist favorites/meal plans
  services/
    recipeAPI.js         # API integration (Spoonacular)
  utils/
    recipeUtils.js       # Recipe data helpers
    dateUtils.js         # Date formatting
  contexts/
    RecipeContext.js     # Global state management
  App.js
  index.css
```

## Step-by-Step Guide

### Step 1: Setup & API Integration (45 mins)

```bash
npx create-react-app recipe-finder
cd recipe-finder
```

- Register for Spoonacular API
- Setup environment variables
- Create API service functions
- Test basic recipe fetching

### Step 2: Context & State Management (60 mins)

- Learn about React Context
- Create RecipeContext for global state
- Manage recipes, favorites, and filters
- Implement context provider

### Step 3: Search & Filter System (90 mins)

- Build search input component
- Create filter panel with multiple options
- Implement search logic
- Combine multiple filters effectively
- Handle empty states and loading

### Step 4: Recipe Display Components (75 mins)

- Design recipe card component
- Create responsive grid layout
- Add recipe detail modal/page
- Handle recipe images and fallbacks
- Format cooking times and difficulty

### Step 5: Favorites & Persistence (60 mins)

- Implement add/remove favorites
- Create custom useLocalStorage hook
- Build favorites page
- Handle favorites state across app

### Step 6: Meal Planning Feature (90 mins)

- Create weekly meal planner
- Drag and drop recipes to days
- Store meal plans in localStorage
- Display planned meals calendar view

### Step 7: Shopping List Generator (45 mins)

- Extract ingredients from planned meals
- Combine duplicate ingredients
- Create printable shopping list
- Allow manual additions/removals

## Key React Concepts

- **Context API:** Global state without prop drilling
- **Custom Hooks:** Reusable stateful logic
- **useMemo:** Performance optimization for expensive calculations
- **useCallback:** Optimizing event handlers
- **Component Composition:** Building complex UIs from simple parts
- **Error Boundaries:** Graceful error handling
- **Lazy Loading:** Code splitting for better performance

## Code Examples

### Custom Hook

```jsx
const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchRecipes = useCallback(async (query, filters) => {
    setLoading(true);
    try {
      const results = await recipeAPI.search(query, filters);
      setRecipes(results);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { recipes, loading, searchRecipes };
};
```

### Context Implementation

```jsx
const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [mealPlan, setMealPlan] = useLocalStorage("mealPlan", {});

  const addToFavorites = (recipe) => {
    setFavorites((prev) => [...prev, recipe]);
  };

  return (
    <RecipeContext.Provider
      value={{
        favorites,
        addToFavorites,
        mealPlan,
        setMealPlan,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
```

## API Integration

- **Spoonacular API** - Comprehensive recipe database
- **Recipe Search** - Find recipes by various criteria
- **Recipe Information** - Detailed recipe data
- **Nutritional Data** - Calories and macro information
- **Image URLs** - High-quality recipe photos

## Advanced Features

- **Pagination** - Handle large result sets
- **Infinite Scroll** - Load more recipes automatically
- **Recipe Scaling** - Adjust serving sizes
- **Unit Conversion** - Metric/Imperial conversions
- **Recipe Ratings** - User rating system
- **Recipe Comments** - User feedback

## Styling Considerations

- **Grid Layouts** - Responsive recipe cards
- **Image Optimization** - Lazy loading and fallbacks
- **Filter UI** - Intuitive filtering interface
- **Mobile Design** - Touch-friendly interactions
- **Print Styles** - Printable shopping lists and recipes

## Performance Optimization

- **Debounced Search** - Reduce API calls
- **Image Lazy Loading** - Improve initial load time
- **Component Memoization** - Prevent unnecessary re-renders
- **Virtual Scrolling** - Handle large lists efficiently

## Bonus Challenges

- Recipe sharing functionality
- User-generated recipes
- Recipe difficulty calculator
- Cooking timer integration
- Voice search capability
- Recipe import from URLs
- Offline recipe storage
- Recipe recommendation engine

## Testing Strategies

- Unit tests for utility functions
- Integration tests for API calls
- Component testing with React Testing Library
- E2E tests for critical user flows

## Resources

- [Spoonacular API Documentation](https://spoonacular.com/food-api)
- [React Context Documentation](https://react.dev/reference/react/useContext)
- [Custom Hooks Guide](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [Performance Optimization](https://react.dev/reference/react/useMemo)

## Common Challenges

- API rate limiting management
- Image loading and error handling
- Complex state synchronization
- Search result relevance
- Mobile responsive design
- Data persistence across sessions

## Next Steps

Excellent work on managing complex state and data! For the final project, the Habit Tracker, you'll learn about data visualization, advanced animations, and building a complete productivity application with charts and progress tracking!
