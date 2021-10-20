import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Tabs = () => {
    return (
        <View style={styles.wrapperTabs}>
            <View style={styles.navTab}>
                <View style={styles.navItem}>
                    <Text style={styles.navLabel}>Beranda</Text>
                </View>
                <View style={styles.navItem}>
                    <Text style={styles.navLabel}>Promo</Text>
                </View>
                <View style={styles.navItem}>
                    <Text style={styles.navLabel}>Pesanan</Text>
                </View>
                <View style={styles.navItem}>
                    <Text style={styles.navLabel}>Chat</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapperTabs: {
        backgroundColor: '#228B22',
        height: 120,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    navTab: {
        height: 90,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 110,
        height: 52,
        backgroundColor: '#006400',
        marginHorizontal: 17,
        marginBottom: 16
    },
    navItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 40,
        borderRadius: 110,
        marginHorizontal: 8,
        padding: 5
    },
    navLabel: {
        color: '#000',
        fontWeight: '500'
    }
})

export default Tabs
