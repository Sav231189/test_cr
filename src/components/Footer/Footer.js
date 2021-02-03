import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import Svg, { Image } from "react-native-svg"
import * as RootNavigation from '../../../RootNavigation.js';

export function Footer(props) {

	return (
		<View style={styles.footer}>
			<TouchableOpacity style={styles.itemBtn} onPress={() => RootNavigation.navigate('Home')} >
				<Svg
					width={26}
					height={30}
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 26 30"
				>
					<Image
						xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAYAAAAy2w7YAAADNklEQVRIS+2WTWhdRRTHf+fmkZfUtFGouiquBLsRXLhoNbGKiIoS253QUneCYiW576UzMeKIMTPJezfBSgV3lhbc1RaliIgfjbYLF4ILFbpRuvIDtCY2feHlHpmkr6Q2eR/GZWc75/x/M2fO+d8rdLAqlcody/Xky5jSVcgfKpfLv7abLu0GhhD6VbvPCnpvzFHkO5GlQWPMpXY02gI59+6W3uLCJwoPAD9eFb5H4OvFWt9jzj1/uRWsJcg5191T3HYK9AmBiyT13SuieeGcwg6BM4u1+b3OuaVmsKYg51zSW9x6QuFZ4Peka3n36OjohSg4PT19d77cdQ7YLvD+Ym1+v3Mu3wjWFOR99aggLwB/KeyxNv12rZD32X0CXwDbFH3H2tKLHYPCZPUNRMaBRUQfN6Z0dj2REKqDqHwM9KI6YcZKr64Xt+6NvK8OCzID1BNl7+hY+lGz+k9PZk/lwgdAQdERa0uz/46/ATQ1OXNQRd9bCRQOGJOeaNVRcT+EbD/K8ZU0lecOj40cW5t3HSiEmSFUTwIJooeMKb3dDqQRE0L1JVSOxJ5EZJ8xI6cbe9dA3lceEZIzQFHAHbbp651AGrFTPntNwQE1JX/S2vJnq8UBvK/eL8inq93DEWvTl/8LpJHjffaWwKHVbtVHrS19I1NTszs1z2NHbVfkuDHDB0VENwNSVQlh9pigB+L8SZIMivfZTwJ3gX54pbawzzlX3wykkeucK/QU+06CPK3wswSfxdNfvlLru70dz+rkENEje4oLvwFbGqBLxqa3diLSbmzw2Z9Af0egiYlsR6EguyKkXtfz4+PpxVbAjkCx3sXi1kwgelnXVfFlhaO12nza7F07AoWQVVBKcTZQXR1CkaE4cwhVY9LyRjdrG+S9v03o/iW6Ra7JwNjY8PkoOjk5uyuRfC66gLJ0p7X2j3VNt903CqH6ICpzCnPWpoNrxbzPzgoMIDpgTOmrTYG8r+wRks+B08amz6wVCz47BQwp+cPWluN36YbVQelugq6v3s3S/W9dFwu70a9tAbilWXsDf0f728Ad+leMJPjse2BnK3NUeNPaNP5+XVveZxMCr7TKBX74B+6p1fo55H16AAAAAElFTkSuQmCC"
						width={26}
						height={30}
					/>
				</Svg>
			</TouchableOpacity>
			<TouchableOpacity style={styles.itemBtn} onPress={() => RootNavigation.navigate('Main')} >
				<Svg
					width={22}
					height={30}
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 22 30"
				>
					<Image
						xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAACN0lEQVRIS83WPWgUQRTA8f+75CJZbFQUNRBPq2ChYrBWwVKwSVJYiChCQDgh5mZTTruzRy4GFJuIKIimEbG0iFaiovjR2OkJsVBQBJloct6TlUTCcUnGi0GnnH37e2/ezjIjAKOjo121Wi0RkWOquj6bCxz36vV6/8jIyJfGeKlUKtvm5uaeAF3AZxF5txKqqruB/HzcQ+/9EWutX/yeOOcmgFOqOtHZ2Xm2WCx+Xwl2zr0F2oBbwHlgynt/dDGewZ+AWe99t7V2diU0ez4PY4wpOOfGgHPAXe9934KRwQo8MMYcCkEbYVWVNE0vAYPA7UKh0D8wMPCjVfgVsMt7v8la+81am4ui6DpwHLhRKBROtAQnSXJBRIpA2RhTylYxOTnZVq1Wb6pqH1BpCZ7fni+BjcAj4DFQV9VIRM4AtZbgrMI0TfcA11R1b7Nv0zK8gJXL5R5V3boIH8uSrRpurNY5dx842BROkuRwLpdrusRGqF6vv4jjeGphflnYOfcB2By4rz8aY7YEwWtWcWClTcOWbcWawc65p8D+wATPjDG9QT1O0/QqsC8Qfl4qlU4GwYHgf9TjJEkGRaQnpHJVfR3H8eWgVjjnpoHtITDw3hiTnZe/xrLbrVwu71DVnSGwiLwZHh6uBsEh4FIx/+YH+VsV//Hxv1Ria21HFEXZhaejpQtLM3h8fHzdzMzMRRE5DVxp6YrVDFbVbmADMJ3P5w9IFrSKS+HvHCLyVVXvtLe3x0NDQ9M/AYvajYvOSYKRAAAAAElFTkSuQmCC"
						width={22}
						height={30}
					/>
				</Svg>
			</TouchableOpacity>
			<TouchableOpacity style={styles.itemBtn} onPress={() => RootNavigation.navigate('Message')} >
				<Svg
					width={32}
					height={29}
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 32 29"
				>
					<Image
						xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAdCAYAAADLnm6HAAACkElEQVRIS+2WTUgUYRzGf/9xbY2SPNShIi9CVOCpCLtUUESnQKqLBzsVgRTtR/spMgjO7C67GtEh9BIEXgrqEkQU9EEUHbpYQZEQ9HVIwlBQa51/TLQmm9k4uxsFzWkY3ud5fu/z/mFeAbCss2vq5HOvIoeA1e63Gj5jgl6e1WU9qdTJD+KGG3x5gNACOAJvHXBqAWCAobAeMFBGHep3SCZTGEQ5CnJ71pGOdDr0vhbhJc++voG1dYYOg+5GGJKMXfgIrBKjuCEej7+rZXjJO5vNrlMn8Br45AKo+5JIRpr+RHgpI2MXxr9t/K8HyGYLbY7Dfj/tGAbX4/HIw4W0nhvIWoVTKgz4ARAlFE9FzlQEYFn5LSKy3Q+Aqj5KpaLPKgLwE+xF4/kIclb/Lkdo92JavsZQrsRS4TsVNfB/BvxU70XjeQZsu38fOB1eTH9eYwwnk+Eb//YM5HK5Fi0arX4akIAzEovFRitqwE+wF035DEwmkpFGL8JqrcnYhQlgpfs3fA5sFIe98XTkVrUCFvPJ9hX2qMFN4IV7I+pCOYcwDtqjqiOuuL5enkSj0bFyI9M0G4LBFW1+QUWkFaQXpUmQE6KqkssMnFf02HxTUW2Pp6JX53+z7fxWQS4Cm/0ClHSCDMYSoeMyd0PJ5HeqymGBA0DzfADTNAPLg41phW4gADwFXi4ZQlBV3ojopUQietfVzwGUzGw7f0GQIyUAy8pvMtxdC9uAokDv1MyEbZpmcckACwgWAzgI0qxCBgi6uzYcozOWDj2uRvCPoyhzKzUAuDfkdYAK2j81M9ltmuZ0NcMXPYLvQa8Mlc5YKnyv2sG/b0AYmp5uCJtm12Stwn/RQMESce4nEqev1TK45P0V1HdkM2mCh3cAAAAASUVORK5CYII="
						width={32}
						height={29}
					/>
				</Svg>
			</TouchableOpacity>
			<TouchableOpacity style={styles.itemBtn} onPress={() => RootNavigation.navigate('Basket')} >
				<Svg
					width={33}
					height={29}
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 33 29"
				>
					<Image
						xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAdCAYAAAAkXAW5AAAErUlEQVRYR62XfWwUZRCHn7m2FLEooIhFTJRI1Goo1RQBwUjDhyjGCAlqNFgNpRgasXett3sUOcHc7tHeAUEF0yghqImJ3wasCET/UMGEWEETPzASEsQPgmip9Oh1x2yvvZa2V7qF+Wtv3/nNPJl39n3nxLLiy8CZQjcTfKeG5LLG7/ef7P7e67MWMhkffqAEGI3QhLIPpZ5G3hZQN6bYViwBDOmVQFhmGIFXvCZ2/RWEIiwgmFEv7KCZR+RHmsSyakt86pvY6ayi94HMQiVihPwrBwVRRA2wtl2blQ3D8rrCOG3Q3NT5eyffMF96JrGsukpB4opuM82qUq8QWsx4kvwA5LRrp90DGz6Elv9SoQ4fgidndIUVHuoFYdvxRai+hfKpEQrM8QxRxBpgVVp3/+NQeCe8sDRTqD19QMSmoXwBnAb2eIVYvHvj1PyTR69K60qDMGU2JFuhLQlbbWh0w6etuRdENBqfrI7u95q803/x7o3knzzaJX/MD7cUw7Z1UFwCS2pg1hhoPZv26QURDr+UNzS3JdU5QoUqzV6AljZEK0b9++ftac0116ca8dSJ1Kt9Z2DRRDj6c6fL770g3BXbiv0FXOmo3hwKVblNNmDTIpYBm9OCp9ZA0QyoXQHFM6FsFczOT21Pyrb3DWHHDqDcJg6zgisDnvpCJ3IpWRwGrm5PMXQYPFMLRdPhxHHYEoZD+zoBHPdE6RPCsmIfCcwX1cXBUNX2AZehw1EncTfCrvRnmimA8qw0Utt3JSKxLQjlAqGgGXBPPs+mRdwFbAOu6ylWkdPiqF8aqU+1Xh9m2/EaVNcq+rJpVi33TNBZkQKGkMtChJnNuXk3HRlz44w/Ro77p+TgBzfIATo6NQNENBJ/QkVfQ3jfMAIPDhaiuy5qxSsU3QS8Z5iBBd3XMlSibi4qDShfG6HAHRcDwrJirws8qmCYZiB6XohIpK7AJ/I9cNwwA2MvBoRtxX8CnaA4M02z+rPzQqwPrx+RyHX+BpyWRFNuOBxOXghIJPLiFT5JuD3gtCSGXh4OL3evhLT1uR3uqm3F3JNyWLJNxtXU+I9dCIRt181DZaciB03TX9gzVn8Q7nYUiOrCYKjq3QuBsKzYJoEKhHrDCPS6TjNCRK2YranJqA04ph2jmFcYSU1t+a5O8c02zcrdA65EPB6/pDWhryo8nOk88QB0BuU5IxSo60uTsRKdzvF4fFQiIZd5SHiOa05bmw4fPfy38vLy9I014EoMNulgdOethG3HH0B1NXCtwpfgW2GalUcyJbOsWKlAtTviK+xSzakMhZ52R4OM1i+EbddNR+VzwJeOoPzScrapIBwOd41GHYvRSN0CFXnn3GyyP2hUThWR9v8YnnsiasXqFZYovJHtOOvafL6PgbGZ5oyoFduhcC/CBlV9U5C9QB4itxqG3/3kvUPYVmwrUIqyOSvHCbclfV8B4xWZZ5r+hp4R7UisAWEuIquTSd2ancW3wEiESYYRcJ+9Q1hWfI6gn/RQHs/KdiZUV1f3mj3Tt283gcB3ZxJNheFw2BkUhCuyI7EyhOdTB47sRygzDP+hfhozKKlDbgTC3qxWp6x6VfWv/TXm/5sStTuF2IKVAAAAAElFTkSuQmCC"
						width={33}
						height={29}
					/>
				</Svg>
			</TouchableOpacity>
			<TouchableOpacity style={styles.itemBtn} onPress={() => RootNavigation.navigate('Profile')} >
				<Svg
					width={30}
					height={31}
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 30 31"
				>
					<Image
						xlinkHref="data:image/png;base64,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"
						width={30}
						height={31}
					/>
				</Svg>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	footer: {
		height: 72,
		width: '100%',
		paddingHorizontal: 20,
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: "center",
		borderTopWidth: 1,
		borderTopColor: '#393939',
	},
	itemBtn: {
		position: "relative",
		bottom: 5,
	},
});
