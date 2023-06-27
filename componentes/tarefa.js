import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tarefa = (props) => {
    const handleDelete = () => {
        props.onDelete(props.index);
    };

    const handleToggleComplete = () => {
        props.onToggleComplete(props.index);
    };

    return (
        <View style={styles.item}>
            <TouchableOpacity
                style={styles.quadrado}
                onPress={handleToggleComplete}
            >
                {props.completed && (
                    <MaterialCommunityIcons name="check" size={24} color="blue" />
                )}
            </TouchableOpacity>
            <View style={styles.itemEsquerda}>
                <View
                    style={[
                        styles.task,
                        props.completed && styles.completedTask,
                    ]}
                >
                    <Text style={styles.taskText}>{props.text}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.deleteIconContainer} onPress={handleDelete}>
                <MaterialCommunityIcons name="delete" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    itemEsquerda: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    quadrado: {
        width: 24,
        height: 24,
        backgroundColor: "#55BCF6",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    task: {
        flex: 1,
        textDecorationStyle: "solid",
    },
    taskText: {
        color: "black",
        fontSize: 16,
        textDecorationLine: "none",
    },
    completedTask: {
        textDecorationLine: "line-through",
    },
    deleteIconContainer: {
        marginLeft: 10,
    },
});

export default Tarefa;
