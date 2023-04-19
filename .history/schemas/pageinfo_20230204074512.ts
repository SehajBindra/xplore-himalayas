// import {defineField, defineType} from 'sanity'

export default{
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },

    {
      name: 'heroImage',
     
      title: "Image",
      type: 'image',

      options: {
        hotspot:true
      }
    },



    {
      name: 'backgroundInformation',
      title: 'BackgroungInformation',
      type: 'string',
      
    },
    
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'profilePic',
      title: 'ProfilePic',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'email',
      title: 'Email',
      type: 'string',
     
    },

    // {
    //     name: 'socials',
    //     title: 'Socials',
    //     type: 'array',
    //     of: [ {type: 'reference' , to: {type : "social"}}, ]
    //   },
   
  ],


  
}
