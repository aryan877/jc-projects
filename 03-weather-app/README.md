# Weather App ⛅

**Level:** Intermediate  
**Time:** 4-5 hours  
**Focus:** API Integration, Async Operations, Error Handling

## What You'll Build
A modern weather application that fetches real-time weather data from APIs. Users can search cities, view current conditions, 5-day forecasts, and save favorite locations.

## Learning Goals
- Making API calls with fetch()
- Handling asynchronous operations
- useEffect hook for side effects
- Error handling and loading states
- Working with external data
- Environment variables for API keys
- Responsive design patterns

## Features to Implement
1. **City Search** - Search for weather by city name
2. **Current Weather** - Temperature, conditions, humidity, wind
3. **5-Day Forecast** - Extended weather prediction
4. **Geolocation** - Get weather for current location
5. **Favorite Cities** - Save and quickly access locations
6. **Loading & Error States** - Proper UX for async operations

## Project Structure
```
src/
  components/
    WeatherApp.js        # Main component
    SearchBar.js         # City search input
    CurrentWeather.js    # Today's weather display
    Forecast.js          # 5-day forecast
    FavoritesList.js     # Saved cities
    LoadingSpinner.js    # Loading indicator
  services/
    weatherAPI.js        # API calls
  utils/
    dateUtils.js         # Date formatting
  App.js
  index.css
```

## Step-by-Step Guide

### Step 1: Setup & API Key (30 mins)
```bash
npx create-react-app weather-app
cd weather-app
```
- Sign up for OpenWeatherMap API
- Create .env file for API key
- Setup environment variables

### Step 2: Basic API Integration (60 mins)
- Learn about fetch() and promises
- Create weatherAPI service
- Handle API responses and errors
- Parse JSON data

### Step 3: Search Functionality (45 mins)
- Create controlled search input
- Trigger API calls on search
- Handle search results
- Display city not found errors

### Step 4: Weather Display (60 mins)
- Design current weather component
- Format temperature and conditions
- Add weather icons
- Display additional details (humidity, wind, etc.)

### Step 5: Loading States (30 mins)
- Create loading spinner component
- Show loading during API calls
- Handle different loading states
- Improve user experience

### Step 6: Forecast Component (45 mins)
- Fetch 5-day forecast data
- Display forecast cards
- Format dates and temperatures
- Responsive grid layout

### Step 7: Favorites System (45 mins)
- Add/remove favorite cities
- Store favorites in localStorage
- Quick access to saved locations
- Manage favorites list

## Key React Concepts
- **useEffect:** Managing side effects and API calls
- **Async/Await:** Modern JavaScript asynchronous patterns
- **Error Boundaries:** Handling component errors
- **Loading States:** Managing async operation feedback
- **Environment Variables:** Secure API key storage
- **Local Storage:** Persisting user data

## Code Examples

### API Call with useEffect
```jsx
useEffect(() => {
  const fetchWeather = async () => {
    setLoading(true);
    try {
      const data = await weatherAPI.getCurrentWeather(city);
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  if (city) fetchWeather();
}, [city]);
```

### Error Handling
```jsx
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);

if (loading) return <LoadingSpinner />;
if (error) return <ErrorMessage message={error} />;
```

## API Integration
- **OpenWeatherMap API** - Free tier available
- **Current Weather Endpoint** - Real-time conditions
- **5-Day Forecast** - Extended predictions
- **Geocoding API** - Convert city names to coordinates

## Styling Tips
- Weather-themed color schemes
- Responsive grid for forecasts
- Smooth transitions and animations
- Mobile-first design approach
- Weather condition backgrounds

## Bonus Challenges
- Hourly forecast (24-hour view)
- Weather maps integration
- Push notifications for severe weather
- Historical weather data
- Multiple unit systems (Celsius/Fahrenheit)
- Weather comparison between cities

## Common Pitfalls
- API rate limiting
- Handling invalid city names
- Network connectivity issues
- CORS problems (use proper API endpoints)
- API key exposure (use environment variables)

## Resources
- [OpenWeatherMap API Docs](https://openweathermap.org/api)
- [Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [React useEffect Guide](https://react.dev/reference/react/useEffect)
- [Environment Variables in React](https://create-react-app.dev/docs/adding-custom-environment-variables/)

## Testing Your App
- Test with various city names
- Test network failures
- Test API key issues
- Test responsive design
- Test geolocation permissions

## Next Steps
Great job handling async operations! Next up is the Recipe Finder where you'll work with more complex data structures and learn about data filtering and searching techniques!