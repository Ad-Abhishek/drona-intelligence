# Bootcamp Configuration Guide

This guide explains how to easily add, modify, or remove bootcamp courses using the configurable system.

## Configuration File Location

All bootcamp data is stored in: `src/data/bootcamps.js`

## How to Add a New Bootcamp Course

1. Open `src/data/bootcamps.js`
2. Add a new object to the `bootcamps` array with the following structure:

```javascript
{
  id: 'unique-course-id',
  title: 'Course Title',
  duration: 'X Weeks',
  schedule: 'Full-time', // or 'Part-time'
  price: 15999, // Price in Rs
  monthlyPrice: 1333, // Monthly price in Rs
  description: 'Course description explaining what students will learn...',
  icon: {
    svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="..."></path>`,
    gradient: 'from-color-500 to-color-500'
  },
  curriculum: [
    'Learning point 1',
    'Learning point 2',
    'Learning point 3',
    // Add more curriculum items
  ],
  buttonColor: 'bg-color-600 hover:bg-color-700',
  borderColor: 'hover:border-color-500',
  textColor: 'text-color-400'
}
```

## How to Modify Existing Courses

1. Find the course in the `bootcamps` array by its `id`
2. Update any field you want to change:
   - `title`: Course name
   - `duration`: How long the course takes
   - `price`/`monthlyPrice`: Pricing information
   - `description`: Course overview
   - `curriculum`: Array of learning points
   - Colors: Update the gradient, button, border, and text colors

## How to Remove a Course

1. Find the course in the `bootcamps` array
2. Delete the entire course object
3. The course will automatically be removed from the website

## Adding Success Stories

Add new testimonials to the `successStories` array:

```javascript
{
  name: 'Student Name',
  initials: 'SN', // Two letters for avatar
  position: 'Job Title at Company',
  bootcamp: 'Bootcamp Name',
  testimonial: 'Student testimonial quote...',
  gradient: 'from-color-500 to-color-500',
  textColor: 'text-color-400'
}
```

## Modifying Features Section

Update the "Why Choose Our Bootcamps" features in the `features` array:

```javascript
{
  title: 'Feature Title',
  description: 'Feature description...',
  icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="..."></path>`,
  gradient: 'from-color-500 to-color-500',
  borderColor: 'hover:border-color-500'
}
```

## Adding FAQ Items

Add new frequently asked questions to the `faqs` array:

```javascript
{
  question: 'Your question here?',
  answer: 'Detailed answer to the question...'
}
```

## Color Schemes

Use consistent color schemes across courses:

- **Blue**: `from-blue-500 to-cyan-500`, `bg-blue-600 hover:bg-blue-700`, `text-blue-400`
- **Purple**: `from-purple-500 to-pink-500`, `bg-purple-600 hover:bg-purple-700`, `text-purple-400`
- **Green**: `from-green-500 to-teal-500`, `bg-green-600 hover:bg-green-700`, `text-green-400`
- **Red**: `from-red-500 to-orange-500`, `bg-red-600 hover:bg-red-700`, `text-red-400`
- **Yellow**: `from-yellow-500 to-orange-500`, `bg-yellow-600 hover:bg-yellow-700`, `text-yellow-400`

## Icons

Icons use SVG paths from Heroicons. You can find more icons at:
- [Heroicons](https://heroicons.com/)
- Copy the SVG path (the `d` attribute content)

## Important Notes

1. **Course IDs**: Must be unique and used in the form dropdown
2. **Pricing**: Use numbers without commas (e.g., 15999 not "15,999")
3. **Colors**: Use Tailwind CSS color classes
4. **Curriculum**: Keep items concise and actionable
5. **Descriptions**: Should be engaging and highlight key benefits

## Testing Changes

After making changes:
1. Save the file
2. Refresh your browser
3. Check that all courses display correctly
4. Test the application form dropdown includes new courses
5. Verify all links and styling work properly

## Example: Adding a New Course

```javascript
// Add this to the bootcamps array
{
  id: 'blockchain',
  title: 'Blockchain Development',
  duration: '20 Weeks',
  schedule: 'Full-time',
  price: 16999,
  monthlyPrice: 1416,
  description: 'Learn to build decentralized applications and smart contracts on various blockchain platforms including Ethereum, Solana, and more.',
  icon: {
    svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>`,
    gradient: 'from-indigo-500 to-purple-500'
  },
  curriculum: [
    'Blockchain fundamentals and cryptography',
    'Smart contract development with Solidity',
    'Web3 integration and DApp development',
    'NFT and DeFi protocol development',
    'Blockchain security and best practices'
  ],
  buttonColor: 'bg-indigo-600 hover:bg-indigo-700',
  borderColor: 'hover:border-indigo-500',
  textColor: 'text-indigo-400'
}
```

This new course will automatically appear on the website with all the proper styling and functionality!