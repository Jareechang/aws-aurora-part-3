import MuiButton from '@material-ui/core/Button'
import { Props } from './types'
import * as utils from './utils'

const Button : React.FC<Props> = ({ type = '', ...rest }) => {
  return (
    <MuiButton
      className={utils.mapButtonTypeToStyle(type)}
      {...rest}
    />
  )
}

export default Button
