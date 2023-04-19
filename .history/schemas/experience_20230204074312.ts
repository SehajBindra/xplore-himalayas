// import {defineField, defineType} from 'sanity'

export default{
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
        name: 'jobtitle',
        title: 'JobTitle',
        type: 'string',
      },
   

    {
      name: 'companyImage',
     
      title: "Company Image",
      type: 'image',

      options: {
        hotspot:true
      }
    },



    {
      name: 'datestarted',
      title: 'Date Started',
      type: 'date',
      
    },
    
    {
      name: 'dateEnded',
      title: 'Date Ended',
      type: 'date',
      
    },
    {
      name: 'currentStatus',
      title: 'Current Status',
      type: 'boolean',
      
    },
    
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'text',
      
    },
    

    {
        name: 'technologies',
        title: 'Technologies',
        type: 'array',
        of: [ {type: 'reference' , to: {type : "skill"}}, ]
      },
   
  ],


  
}
