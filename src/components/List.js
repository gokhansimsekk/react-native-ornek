import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Details from './Details';

export default class List extends Component {
   componentWillMount() {
      isLoading = true;
      state = { data: [] };
      const arr = [
         {
            albumId: 1,
            id: 1,
            title: 'accusamus beatae ad facilis qui sunt',
            media: 'https://www.latimes.com/resizer/_lkmXhOjRj9ZiIJYgx1xwAa9klY=/800x0/www.trbimg.com/img-5cb63d6e/turbine/la-1555447146-1mlew8ghvg-snap-image',
            url: 'https://www.google.com/'
         },
         {
            albumId: 1,
            id: 2,
            title: 'reprehenderit est deserunt velit ipsam',
            media: 'https://www.cheatsheet.com/wp-content/uploads/2019/04/Planet-Earth-640x431.jpg?x77910',
            url: 'https://www.google.com/'
         },
         {
            albumId: 1,
            id: 3,
            title: 'officia porro iure quia iusto qui ipsa ut modi',
            media: 'https://seoimgak.mmtcdn.com/blog/sites/default/files/images/Lake-Louise.jpg',
            url: 'https://www.google.com/'
         },
         {
            albumId: 1,
            id: 4,
            title: 'culpa odio esse rerum omnis laboriosam',
            media: 'https://wxv73zw8wg-flywheel.netdna-ssl.com/wp-content/uploads/2018/11/Leigh-Ayres-.-Barn-OwlSMALL.jpg',
            url: 'https://www.google.com/'
         },
         {
            albumId: 1,
            id: 5,
            title: 'natus nisi omnis corporis facere molestiae',
            media: 'http://cphpost.dk/wp-content/uploads/2019/05/forest-1950402__340.jpg',
            url: 'https://www.google.com/'
         }
      ]
      this.setState({ data: arr });

      // axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      //    isLoading = false;
      //    this.setState({ data: response.data });
      // });
   }

   componentDidMount() {
      console.log('componentDidMount');
   }

   renderData() {
      if (this.state) {
         return this.state.data.map(responseData =>
            <Details key={responseData.id} data={responseData} />
         );
      }
   }

   render() {
      return (
         <ScrollView>
            {this.renderData()}
         </ScrollView>
      );
   }
}