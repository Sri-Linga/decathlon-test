import { connect } from 'react-redux'
import axios from 'axios'
import List from '../../components/List/List'


const mapStateToProps = state => {
    return state.listData
}
const mapDispatchToProps = (dispatch) => ({
    setListData: async () => {
        await dispatch({
            type: 'TOGGLE_LOADING'
        })
        axios ({
            method : 'get',
            url: `https://sportplaces.api.decathlon.com/api/v1/places?origin=-73.582,45.511&radius=99&sports=175`,
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            json: true
        })
        .then(res => {
            dispatch({
                type: 'GET_DATA',
                payload: {
                    list: res.data.data.features,
                    count: res.data.count
                }
            })
        })
        .catch(error => {
            dispatch({
                type: 'ERROR',
                payload: {
                    error
                }
            })
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)